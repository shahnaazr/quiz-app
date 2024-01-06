import { decodeHtmlEntities } from "../helpers";

describe("decodeHtmlEntities", () => {
  it("decodes HTML entities correctly", () => {
    const htmlString =
      "&lt;p&gt;This is a &amp;#60;p&amp;#62;paragraph&amp;#60;/p&amp;#62;&lt;/p&gt;";
    const decodedString = decodeHtmlEntities(htmlString);
    const expectedString = "<p>This is a &#60;p&#62;paragraph&#60;/p&#62;</p>";

    expect(decodedString).toBe(expectedString);
  });

  it("returns an empty string for invalid HTML", () => {
    const noHtmlEntities = "This does not contain HTML entities";
    const result = decodeHtmlEntities(noHtmlEntities);

    expect(result).toBe("This does not contain HTML entities");
  });

  it("decodes HTML entities with French characters", () => {
    const htmlString = "&Eacute;l&eacute;gant";
    const decodedString = decodeHtmlEntities(htmlString);
    const expectedString = "Élégant";

    expect(decodedString).toBe(expectedString);
  });
});
