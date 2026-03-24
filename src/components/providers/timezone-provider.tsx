"use client";

import Cookies from "js-cookie";
import { useEffect } from "react";

function TimezoneProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    Cookies.set("timezone", timezone, {
      expires: 365,
      path: "/",
      sameSite: "Lax",
    });
  }, []);

  return <>{children}</>;
}

export { TimezoneProvider };
