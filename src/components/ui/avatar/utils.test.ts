import { describe, expect, it } from "vitest";
import { generateAvatarFallback } from "./utils";

describe("generateAvatarFallback", () => {
  describe("single word", () => {
    it("returns first 2 characters uppercased", () => {
      expect(generateAvatarFallback("Alice")).toBe("AL");
    });

    it("returns the only character if name has 1 character", () => {
      expect(generateAvatarFallback("A")).toBe("A");
    });
  });

  describe("multi-word names", () => {
    it("returns first initial + last initial for two-word name", () => {
      expect(generateAvatarFallback("John Doe")).toBe("JD");
    });

    it("skips middle words and uses first + last", () => {
      expect(generateAvatarFallback("John Michael Doe")).toBe("JD");
    });
  });

  describe("Vietnamese names", () => {
    it("returns family name initial + given name initial", () => {
      expect(generateAvatarFallback("Nguyễn Văn An")).toBe("NA");
    });

    it("handles names with multiple middle names", () => {
      expect(generateAvatarFallback("Nguyễn Thị Bích Ngọc")).toBe("NN");
    });

    it("handles Đ as a first character", () => {
      expect(generateAvatarFallback("Đặng Văn Bình")).toBe("ĐB");
    });

    it("uppercases lowercase Vietnamese input", () => {
      expect(generateAvatarFallback("nguyễn văn an")).toBe("NA");
    });
  });

  describe("whitespace handling", () => {
    it("returns empty string for empty input", () => {
      expect(generateAvatarFallback("")).toBe("");
    });

    it("returns empty string for whitespace-only input", () => {
      expect(generateAvatarFallback("   ")).toBe("");
    });

    it("handles extra spaces between words", () => {
      expect(generateAvatarFallback("John   Doe")).toBe("JD");
    });

    it("trims leading and trailing whitespace", () => {
      expect(generateAvatarFallback("  John Doe  ")).toBe("JD");
    });
  });
});
