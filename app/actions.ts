"use server";

import { supabase } from "@/lib/supabase";

export async function fetchReviews() {
  try {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(7);

    if (error) {
      console.error("Error fetching reviews:", error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error("Exception fetching reviews:", err);
    return [];
  }
}

export async function submitReview(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const comment = formData.get("comment") as string;
    const ratingStr = formData.get("rating") as string;
    const rating = ratingStr ? parseInt(ratingStr, 10) : 5;

    if (!name || !comment) {
      return { success: false, error: "Name and comment are required." };
    }

    const wordCount = comment.trim().split(/\s+/).length;
    if (wordCount > 100) {
      return { success: false, error: "Comment must not exceed 100 words." };
    }

    // Generate initials for the avatar
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);

    // Assign a random color for the avatar
    const colors = ["#ef4444", "#6366f1", "#f59e0b", "#10b981", "#8b5cf6", "#ec4899"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const { error } = await supabase.from("reviews").insert([
      {
        name,
        text: comment,
        initials,
        color,
        rating: rating,
      },
    ]);

    if (error) {
      console.error("Error submitting review:", error);
      return { success: false, error: "Failed to submit review. Please check if table exists." };
    }

    return { success: true };
  } catch (err) {
    console.error("Exception submitting review:", err);
    return { success: false, error: "Network or database error. Is the Supabase URL correct?" };
  }
}
