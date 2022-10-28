import { expect } from "@open-wc/testing";
import { getLocale } from "../../src/utils/getLocale.js";
import { localize } from "../../src/localize.js";

describe("getLocale", () => {
    beforeEach(() => {
        // makes sure that between tests the localization is reset to default state
        document.documentElement.lang = "";
    });

    afterEach(() => {
        document.documentElement.lang = "en-GB";
    });

    it("return localize sended", () => {
        const locale = getLocale("es-ES");
        expect(locale).to.be.equal("es-ES");
    });

    it("return default localize config", () => {
        const locale = getLocale();
        expect(locale).to.be.equal("en-GB");
    });
});
