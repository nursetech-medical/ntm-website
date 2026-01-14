# Blog Publishing Guide for Cordflex Website

This guide will walk you through the process of creating and publishing blog articles on the Cordflex website.

## Table of Contents
1. [Overview](#overview)
2. [Image Preparation](#image-preparation)
3. [Creating a New Blog Article](#creating-a-new-blog-article)
4. [Adding Images to Articles](#adding-images-to-articles)
5. [Publishing the Article](#publishing-the-article)
6. [Testing Your Article](#testing-your-article)

---

## Overview

The blog system consists of:
- **Blog List Page** (`/blog`) - Shows all blog articles
- **Blog Article Page** (`/blog/:id`) - Shows individual article content
- **Article Data** - Stored in `BlogArticlePage.js`
- **Images** - Stored in `/frontend/public/images/blog/`

---

## Image Preparation

### Recommended Image Specifications

**Header Images (Main banner at top of article):**
- Dimensions: 1600x600 pixels
- Format: WebP or JPG
- File size: <300KB
- Naming: `[article-topic]-header.jpg` (e.g., `icu-safety-header.jpg`)

**In-Content Images:**
- Dimensions: 800-1200 pixels wide
- Format: WebP or JPG
- File size: <200KB each
- Naming: Descriptive names (e.g., `line-organization.jpg`, `time-savings-chart.jpg`)

### Image Optimization Tools

Before uploading, compress your images using:
- [TinyPNG](https://tinypng.com/) - Free, easy compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app for image compression

### Steps to Optimize:
1. Resize image to recommended dimensions
2. Run through compression tool (aim for <200KB)
3. Convert to WebP for best performance (optional)
4. Save with descriptive filename

---

## Creating a New Blog Article

### Step 1: Add Article to Blog List

Open: `/frontend/src/pages/BlogPage.js`

Find the `blogPosts` array (around line 11) and add your new article:

```javascript
const blogPosts = [
  // ... existing posts ...
  {
    id: 7,  // Use next available ID number
    title: "Your Article Title Here",
    excerpt: "A brief 1-2 sentence summary of the article that will appear on the blog list page.",
    author: "Author Name",
    date: "2026-01-15",  // Use YYYY-MM-DD format
    category: "Safety",  // Choose from: Safety, Economics, Implementation, Testimonials, Technology, Analytics
    readTime: "6 min read",  // Estimate based on word count (250 words = ~1 minute)
    featured: false  // Set to true if you want it highlighted as featured article
  }
];
```

### Step 2: Create Article Content

Open: `/frontend/src/pages/BlogArticlePage.js`

Find the `articles` object (around line 13) and add your article data:

```javascript
const articles = {
  // ... existing articles ...
  7: {  // Use same ID as above
    id: 7,
    title: "Your Article Title Here",
    author: "Author Name",
    date: "2026-01-15",
    category: "Safety",
    readTime: "6 min read",
    headerImage: "/images/blog/your-header-image.jpg",
    content: [
      // Article content blocks go here (see next section)
    ]
  }
};
```

### Step 3: Structure Your Article Content

The `content` array uses different block types. Here's how to use each:

#### Paragraph Block
```javascript
{
  type: "paragraph",
  text: "Your paragraph text goes here. This is the main body text of your article."
}
```

#### Heading Block
```javascript
{
  type: "heading",
  text: "Your Section Heading"
}
```

#### Image Block
```javascript
{
  type: "image",
  src: "/images/blog/your-image.jpg",
  alt: "Descriptive text for accessibility",
  caption: "Optional caption text that appears below the image"
}
```

### Complete Article Example

```javascript
7: {
  id: 7,
  title: "10 Tips for ICU Line Management",
  author: "Dr. Jane Smith",
  date: "2026-01-15",
  category: "Implementation",
  readTime: "8 min read",
  headerImage: "/images/blog/line-management-header.jpg",
  content: [
    {
      type: "paragraph",
      text: "Effective line management in the ICU is crucial for patient safety and staff efficiency. Here are our top 10 tips based on years of clinical experience."
    },
    {
      type: "heading",
      text: "1. Establish Clear Protocols"
    },
    {
      type: "paragraph",
      text: "Create standardized procedures for line organization that all staff can follow consistently."
    },
    {
      type: "image",
      src: "/images/blog/protocol-checklist.jpg",
      alt: "ICU line management protocol checklist",
      caption: "Sample protocol checklist for line management"
    },
    {
      type: "heading",
      text: "2. Use Color Coding"
    },
    {
      type: "paragraph",
      text: "Implement a color-coding system to quickly identify different types of lines."
    },
    // ... continue with more sections
  ]
}
```

---

## Adding Images to Articles

### Step 1: Upload Images

1. Navigate to: `/frontend/public/images/blog/`
2. Drag and drop your optimized images into this folder
3. Verify the filename matches what you used in the code

### Step 2: Reference Images in Code

In your article content, reference images using the path:
```
/images/blog/filename.jpg
```

**Important:**
- Path must start with `/images/blog/`
- Use the exact filename (case-sensitive)
- Include file extension (.jpg, .webp, etc.)

### Image Fallback

If an image fails to load, the system automatically shows a placeholder. To test:
1. Open your article in a browser
2. Check if all images load properly
3. If an image doesn't load, verify:
   - Filename spelling
   - File is in correct folder
   - File extension matches

---

## Publishing the Article

### Local Development Testing

1. Save both `BlogPage.js` and `BlogArticlePage.js`
2. Your dev server should auto-reload
3. Navigate to `http://localhost:3000/blog`
4. Find your article in the list
5. Click "Read Full Article" to view

### Deployment

Once you're happy with the article:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add new blog article: [Your Title]"
   git push
   ```

2. **Deploy to production:**
   - If using automated deployment, it will deploy automatically
   - If manual, follow your deployment process

---

## Testing Your Article

### Pre-Publish Checklist

- [ ] Article appears in blog list (`/blog`)
- [ ] Article opens when clicking "Read Full Article"
- [ ] Header image loads correctly
- [ ] All in-content images load
- [ ] Image captions display properly
- [ ] Author name and date are correct
- [ ] Category badge shows correct category
- [ ] Reading time is accurate
- [ ] Article is readable on mobile devices
- [ ] "Back to Blog" button works
- [ ] Share button functions (if applicable)

### Common Issues

**Article doesn't appear in list:**
- Check that you added it to the `blogPosts` array in `BlogPage.js`
- Verify the ID is unique

**Article content doesn't show:**
- Verify you added the article object to `BlogArticlePage.js`
- Check that the ID matches between both files

**Images don't load:**
- Verify image file is in `/frontend/public/images/blog/`
- Check filename spelling (case-sensitive)
- Confirm file path starts with `/images/blog/`

**Formatting looks wrong:**
- Check for missing commas between content blocks
- Verify quotation marks are properly closed
- Ensure all object properties use correct syntax

---

## Content Best Practices

### Writing Style
- Use clear, professional language
- Break content into digestible sections with headings
- Keep paragraphs to 3-4 sentences
- Use bullet points for lists
- Include relevant examples and data

### Image Usage
- Use 1 header image (required)
- Include 2-4 in-content images for longer articles
- Always add alt text for accessibility
- Use captions to provide context
- Ensure images are relevant to the content

### SEO Optimization
- Write descriptive titles (50-60 characters)
- Create compelling excerpts (150-160 characters)
- Use headings to structure content
- Include relevant keywords naturally
- Add descriptive alt text to images

---

## Advanced: Adding New Categories

To add a new blog category:

1. **Update BlogPage.js:**
   ```javascript
   const categories = ["All", "Safety", "Economics", "Implementation",
                       "Testimonials", "Technology", "Analytics", "YourNewCategory"];
   ```

2. **Use in articles:**
   ```javascript
   category: "YourNewCategory"
   ```

---

## Need Help?

If you encounter issues or need assistance:

1. Check the console for error messages (F12 in browser)
2. Review this guide for common solutions
3. Verify all syntax is correct (commas, quotes, brackets)
4. Test in local development before deploying

---

## Quick Reference

### File Locations
- Blog list: `/frontend/src/pages/BlogPage.js`
- Article content: `/frontend/src/pages/BlogArticlePage.js`
- Blog images: `/frontend/public/images/blog/`

### Content Block Types
- `paragraph` - Body text
- `heading` - Section headings
- `image` - Images with optional captions

### Required Article Fields
- `id` - Unique number
- `title` - Article title
- `author` - Author name
- `date` - Publication date (YYYY-MM-DD)
- `category` - Article category
- `readTime` - Estimated reading time
- `excerpt` - Brief summary (for list page)
- `content` - Array of content blocks

---

**Last Updated:** January 2026
**Version:** 1.0
