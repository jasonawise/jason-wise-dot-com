export const mdxToExcerpt = (mdxContent, { type = "words", limit = 50 }) => {
  if (!mdxContent || typeof mdxContent !== "string") {
    throw new Error("Invalid MDX content");
  }

  // Function to strip Markdown and HTML tags
  const stripMarkdownAndHtml = (content) => {
    // Remove HTML tags
    const noHtml = content.replace(/<[^>]*>/g, "");
    // Remove Markdown formatting (e.g., **bold**, *italic*, # headers, etc.)
    const noMarkdown = noHtml.replace(/([*_~`#>\-]|\[|\]|\!\[|\]\(.*?\))/g, "");
    return noMarkdown;
  };

  // Strip Markdown and HTML
  const plainText = stripMarkdownAndHtml(mdxContent);

  // Create the excerpt based on the type (words or characters)
  if (type === "words") {
    const words = plainText.split(/\s+/).filter(Boolean); // Split by whitespace
    return (
      words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
    );
  } else if (type === "characters") {
    return plainText.slice(0, limit) + (plainText.length > limit ? "..." : "");
  } else {
    throw new Error("Invalid type. Use 'words' or 'characters'.");
  }
};
