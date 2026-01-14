# Cordflex Website - Nursetech Medical

## Company Information

**Company Name**: Nursetech Medical Corp
**Primary Brand**: Nursetech Medical
**Website**: [www.nursetechmedical.com](https://www.nursetechmedical.com)
**Email**: info@nursetechmedical.com
**Address**: 8 The Green, Ste A, Dover, DE 19001

## Product

**Product Name**: Cordflex Clip
**Purpose**: ICU Line Management Solution

---

## Project Setup

This is a React-based frontend application for the Cordflex website.

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

### Running the Development Server

```bash
cd frontend
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
frontend/
├── public/
│   ├── images/          # Image assets
│   │   ├── blog/        # Blog article images
│   │   ├── products/    # Product photos
│   │   ├── team/        # Team photos
│   │   ├── logos/       # Company and partner logos
│   │   ├── testimonials/# Customer photos
│   │   ├── hero/        # Hero section backgrounds
│   │   └── case-studies/# Before/after images
│   ├── resources/       # PDF resources and documents
│   └── favicon.ico      # Site favicon
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── services/       # API and email services
│   └── App.js          # Main application
└── package.json
```

---

## Content Management

### Publishing Blog Articles

See [BLOG_GUIDE.md](BLOG_GUIDE.md) for detailed instructions on:
- Creating new blog articles
- Adding images to articles
- Publishing and testing articles

### Email Form Setup

See [EMAIL_SETUP.md](EMAIL_SETUP.md) for instructions on:
- Configuring Web3Forms for form submissions
- Setting up email notifications
- Testing form submissions

### Adding PDF Resources

1. Place PDF files in `/frontend/public/resources/`
2. Reference them in code using the path: `/resources/filename.pdf`
3. Example:
```javascript
<a href="/resources/product-brochure.pdf" download>Download Brochure</a>
```

### Managing Images

**Image Guidelines:**
- Optimize images before uploading (use TinyPNG, Squoosh, or ImageOptim)
- Use WebP format when possible
- Keep file sizes under 200KB for in-content images
- Use descriptive filenames (e.g., `icu-safety-header.jpg`)

**Where to Place Images:**
- Blog images → `/frontend/public/images/blog/`
- Product photos → `/frontend/public/images/products/`
- Team photos → `/frontend/public/images/team/`
- Logos → `/frontend/public/images/logos/`
- Testimonial photos → `/frontend/public/images/testimonials/`

---

## Configuration

### Environment Variables

Create a `.env` file in the `/frontend/` directory:

```
REACT_APP_WEB3FORMS_KEY=your_access_key_here
```

**Note**: The `.env` file is already in `.gitignore` and will not be committed to version control.

### Backend Connection

The frontend connects to a remote backend API. The backend URL is configured in the environment variables.

---

## Deployment

### Before Deploying

1. ✅ Test all forms (newsletter, trial request, sample request)
2. ✅ Verify all images load correctly
3. ✅ Test blog articles display properly
4. ✅ Check mobile responsiveness
5. ✅ Add `REACT_APP_WEB3FORMS_KEY` to production environment variables

### Production Build

```bash
cd frontend
npm run build
```

The optimized production build will be in `/frontend/build/`

---

## Key Features

- 📧 Email form submissions to info@nursetechmedical.com
- 📝 Blog system with image support
- 🛒 Shopping cart functionality
- 📱 Fully responsive design
- 🎨 Consistent brand colors (#214140, #8BBAB8, #DFEAF0)

---

## Support

For technical issues or questions:
- Review the guides in [BLOG_GUIDE.md](BLOG_GUIDE.md) and [EMAIL_SETUP.md](EMAIL_SETUP.md)
- Check browser console for error messages
- Verify all file paths are correct

---

## Future Enhancements

- Integration with n8n for automated email workflows
- Custom domain email setup
- Enhanced analytics tracking
- Additional blog categories

---

**Last Updated**: January 2026
