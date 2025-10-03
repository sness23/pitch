# doi.bio Pitch Website

An impressive, modern Express.js website showcasing doi.bio - Intelligence Augmentation for Molecular Discovery.

## 🚀 Features

- **Express.js Backend**: Professional Node.js server with security middleware
- **Modern Design**: Clean, professional design with dark theme optimized for scientific content
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and scroll-based interactions
- **Molecular Visualizations**: Integrated molecular structure images and animations
- **Performance Optimized**: Fast loading with compression and optimized static files
- **Security**: Helmet.js security headers and CORS protection

## 📁 File Structure

```
pitch/
├── app.js                              # Express server
├── package.json                        # Node.js dependencies
├── public/                            # Static files served by Express
│   ├── index.html                     # Main website file
│   ├── styles.css                     # Comprehensive CSS styling
│   ├── script.js                      # Interactive JavaScript functionality
│   └── images/                        # Image assets
│       ├── sness.jpg                  # Founder photo
│       ├── assn0.png                  # Interface screenshot 1
│       ├── assn1.png                  # Interface screenshot 2
│       ├── 8ERD.png                   # Molecular structure visualization
│       └── ...                        # Other images
├── doi_bio_preseed_pitch_deck_steven_ness.html  # Original pitch deck
├── doi_bio_preseed_pitch_deck_steven_ness.pptx  # PowerPoint version
├── .gitignore                         # Git ignore file
└── README.md                          # This file
```

## 🎨 Design Highlights

- **Color Scheme**: Professional dark theme with blue/green accents
- **Typography**: Inter font family for modern, readable text
- **Animations**: Subtle animations including molecule rotation, fade-ins, and hover effects
- **Layout**: Grid-based responsive layout with smooth transitions
- **Accessibility**: Keyboard navigation, focus states, and semantic HTML

## 🔧 Technical Features

- **Express.js**: Professional Node.js web server
- **Security Middleware**: Helmet.js for security headers
- **Compression**: Gzip compression for faster loading
- **CORS**: Cross-origin resource sharing support
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Intersection Observer**: Scroll-based animations
- **Debounced Events**: Performance-optimized scroll handling
- **Mobile-First**: Responsive design starting from mobile

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pitch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

4. **Open your browser**
   - Local: http://localhost:3000
   - The server will automatically restart when you make changes (in dev mode)

### Environment Variables

You can set the following environment variables:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

Example:
```bash
PORT=8080 NODE_ENV=production npm start
```

## 🔌 API Endpoints

- `GET /` - Main website
- `GET /health` - Health check endpoint
- `POST /api/contact` - Contact form submission (ready for future use)

## 📧 Contact Integration

The Express app includes a contact API endpoint at `/api/contact` that's ready for integration with:

- Email services (SendGrid, Mailgun, etc.)
- CRM systems
- Database storage
- Notification services

## 🎯 Key Sections

1. **Hero**: Compelling introduction with animated molecule
2. **Problem**: Clear articulation of current pain points
3. **Solution**: doi.bio's unified workspace approach
4. **Product**: Interactive demo flow with screenshots
5. **Market**: Market size and opportunity data
6. **Team**: Founder profile with professional photo
7. **Contact**: Platform links and contact information

## 🚀 Deployment

### Heroku
```bash
# Add Procfile
echo "web: node app.js" > Procfile

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### DigitalOcean App Platform
- Connect your GitHub repository
- Set build command: `npm install`
- Set run command: `npm start`
- Set port: `3000`

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Future Enhancements

- Add more interactive molecular visualizations
- Implement real-time chat or demo scheduling
- Add investor-specific sections
- Integrate analytics tracking
- Add blog/news section
- Implement A/B testing for conversion optimization
- Add database integration for contact forms
- Implement user authentication for admin features

## 📄 License

This website is created for doi.bio pitch purposes. All rights reserved.

---

**Built with ❤️ for doi.bio - Where papers meet proteins**