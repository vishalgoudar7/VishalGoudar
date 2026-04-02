import { useCallback, useEffect, useState } from "react";

const GITHUB_API_BASE_URL = "https://api.github.com/users";

export const useGithubProfile = (username) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProfile = useCallback(
    async (signal) => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`${GITHUB_API_BASE_URL}/${username}`, {
          signal,
          headers: { Accept: "application/vnd.github+json" },
        });

        if (!response.ok) {
          throw new Error(`Unable to load profile (${response.status})`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Failed to fetch GitHub profile.");
        }
      } finally {
        if (!signal || !signal.aborted) {
          setLoading(false);
        }
      }
    },
    [username]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchProfile(controller.signal);

    return () => controller.abort();
  }, [fetchProfile]);

  const retry = useCallback(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, error, retry };
};
