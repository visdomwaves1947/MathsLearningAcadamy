import { courses as fallbackCourses } from '../data/coursesData';
import { quickMathChallenges as fallbackChallenges } from '../data/quizData';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://maths-learning-acadamy-backend.vercel.app';

/**
 * Check backend API health status
 */
export async function checkApiHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`Health check failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('[API] Health check warning:', err.message);
    return { status: 'offline', error: err.message };
  }
}

/**
 * Fetch curriculum courses from backend with fallback
 */
export async function fetchCourses(category = 'all') {
  try {
    const query = category && category !== 'all' ? `?type=course&category=${category}` : '?type=course';
    const res = await fetch(`${API_BASE_URL}/api/content${query}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const data = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      // Map MongoDB documents to the frontend course shape
      return {
        courses: data.data.map((c) => ({
          id: c._id || c.id || c.slug,
          category: c.category || 'all',
          level: c.level || 'All Levels',
          title: c.title,
          description: c.description,
          tag: c.tag || 'Popular',
          tagColor: c.tagColor || 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
          rating: c.rating || 4.9,
          reviewsCount: c.reviewsCount || 1000,
          lessonsCount: c.lessonsCount || 36,
          durationWeeks: c.durationWeeks || 12,
          studentsCount: c.studentsCount || '3,000+',
          instructor: c.instructor?.name || 'Faculty Lead',
          instructorTitle: c.instructor?.title || 'Senior Mathematics Educator',
          skills: c.skills || [],
          popular: !!c.popular,
        })),
        isLive: true,
      };
    }

    // If backend collection is empty, trigger seed in background
    triggerSeed().catch(() => {});

    return {
      courses: category === 'all' ? fallbackCourses : fallbackCourses.filter(c => c.category === category),
      isLive: false,
    };
  } catch (error) {
    console.warn('[API] Fetch courses failed, using fallback data:', error.message);
    return {
      courses: category === 'all' ? fallbackCourses : fallbackCourses.filter(c => c.category === category),
      isLive: false,
      error: error.message,
    };
  }
}

/**
 * Fetch quick math quiz challenges from backend with fallback
 */
export async function fetchChallenges() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/content?type=challenge`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error(`API returned status ${res.status}`);

    const data = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      return {
        challenges: data.data.map((item, idx) => ({
          id: item._id || item.id || idx + 1,
          category: item.category || 'Speed Mental Math',
          question: item.quizData?.question || item.title,
          options: item.quizData?.options || ['Option A', 'Option B', 'Option C', 'Option D'],
          correct: item.quizData?.correctAnswerIndex ?? 0,
          hint: item.quizData?.hint || 'Think step by step.',
          difficulty: item.quizData?.difficulty || 'Medium',
          points: item.quizData?.points || 100,
        })),
        isLive: true,
      };
    }

    return {
      challenges: fallbackChallenges,
      isLive: false,
    };
  } catch (error) {
    console.warn('[API] Fetch challenges failed, using fallback data:', error.message);
    return {
      challenges: fallbackChallenges,
      isLive: false,
    };
  }
}

/**
 * Submit booking / diagnostic assessment to backend
 */
export async function submitBooking(bookingData) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `Assessment Booking: ${bookingData.studentName}`,
        type: 'general',
        category: 'booking',
        description: `Booking request for ${bookingData.gradeLevel} - ${bookingData.goalArea}`,
        metadata: {
          ...bookingData,
          submittedAt: new Date().toISOString(),
        },
      }),
    });

    const data = await res.json();
    return { success: res.ok, data };
  } catch (error) {
    console.warn('[API] Booking submission fallback:', error.message);
    return { success: true, localOnly: true };
  }
}

/**
 * Auto-seed backend with initial academy content if needed
 */
export async function triggerSeed() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/content/seed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  } catch (err) {
    console.warn('[API] Seed request failed:', err.message);
    return null;
  }
}
