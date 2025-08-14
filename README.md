# 🎫 Ticket Temperature Analysis - Picnic Challenge

A modern web application for analyzing and visualizing ticket data organized by temperature levels, built with Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## 🚀 Features

- **Temperature-based Ticket Organization**: Automatically categorizes tickets by temperature levels (Hot, Warm-Hot, Warm, Cold-Warm, Cold)
- **User Ranking System**: Displays top users based on ticket count and activity
- **Interactive UI**: Expandable categories with smooth animations and modern design
- **Real-time Data**: Live updates from API endpoints
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🎯 Project Overview

This application was developed as part of the Picnic challenge, demonstrating advanced frontend development skills with a focus on:

- **Data Visualization**: Intuitive display of complex ticket data
- **User Experience**: Clean, modern interface with excellent usability
- **Performance**: Optimized rendering and efficient data handling
- **Code Quality**: Type-safe development with TypeScript
- **Modern Architecture**: App Router, Server Components, and API Routes

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Built-in fetch API
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/felipersteles/picnic-challenge.git
   cd picnic-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
picnic/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   └── tickets/       # Ticket-related endpoints
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Main application page
│   │   └── providers.tsx      # Context providers
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components (buttons, inputs)
│   │   ├── shared/           # Shared components
│   │   └── pages/            # Page-specific components
│   ├── hooks/                # Custom React hooks
│   │   └── tickets/          # Ticket-related hooks
│   ├── lib/                  # Utility functions
│   ├── types/                # TypeScript type definitions
│   └── data/                 # Static data files
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🔧 API Endpoints

The application integrates with the following API endpoints:

- `GET /api/tickets/info` - Retrieve ticket information organized by temperature
- `GET /api/tickets/users` - Get user ranking data
- `GET /api/tickets` - General ticket data endpoint

## 🎨 Key Components

### Main Features

1. **Temperature Categories**: 
   - Hot (Quente) - Red indicator
   - Warm-Hot (Morna-Quente) - Orange indicator
   - Warm (Morna) - Yellow indicator
   - Cold-Warm (Fria-Morna) - Blue indicator
   - Cold (Fria) - Cyan indicator

2. **User Ranking**:
   - Displays top users by ticket count
   - Real-time statistics
   - Interactive ranking cards

3. **Ticket Details**:
   - Expandable category sections
   - Ticket subject and description
   - Requester information
   - Top users per category

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Manual Deployment

```bash
npm run build
npm start
```

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Type safety and IntelliSense
- **Prettier**: Code formatting (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is developed as part of the Picnic challenge. All rights reserved.

## 👨‍💻 Author

**Felipe Teles**

- GitHub: [@felipersteles](https://github.com/felipersteles)
- LinkedIn: [Felipe Teles](https://linkedin.com/in/felipersteles)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the deployment platform
- Picnic team for the challenging and interesting project

---

⭐ **Star this repository if you found it helpful!**
