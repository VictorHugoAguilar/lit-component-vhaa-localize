import { expect } from "@open-wc/testing";
import { normalizeIntlDate } from "../../src/date/utils/normalizeIntlDate.js";

describe("normalizeIntlDate", () => {
    it("returns a date without unicode u00A0", () => {
        const date = normalizeIntlDate("weekday\u00A0");
        expect(date).to.equal("weekday ");
    });

    it("returns a date without unicode u8206", () => {
        const date = normalizeIntlDate("weekday\u8206");
        expect(date).to.equal("weekday");
    });

    it("returns a date with format en-GB", () => {
        const date = normalizeIntlDate("Saturday 12 October", "en-GB", {
            weekday: "long",
            month: "long",
            day: "2-digit",
        });
        expect(date).to.equal("Saturday, 12 October");
    });

    it("returns a date with format sk-SK", () => {
        const date = normalizeIntlDate("sobota, 12. októbra", "sk-SK", {
            weekday: "long",
            month: "long",
            day: "2-digit",
        });
        expect(date).to.equal("sobota 12. októbra");
    });
});
