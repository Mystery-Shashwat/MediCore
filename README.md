# MediCore

A leading research platform for drug discovery powered by AI and molecular modeling.

## 🧬 Overview

MediCore is a comprehensive web application designed for pharmaceutical research and drug discovery. It combines modern web technologies with AI-powered molecular modeling to provide researchers with powerful tools for drug development and molecular analysis.

## ✨ Features

### 🔬 Core Research Tools
- **Molecular Modeling**: AI-powered molecular structure generation and analysis using NVIDIA's MolMIM API
- **Molecule Bank**: Comprehensive database for storing and managing molecular compounds
- **Research Dashboard**: Centralized workspace for managing research projects and data
- **Interactive Visualizations**: Advanced molecular structure visualization and analysis tools

### 👥 User Management
- **Secure Authentication**: NextAuth.js integration with email/password authentication
- **User Profiles**: Personalized user accounts with profile management
- **Email Verification**: Automated email verification system using Resend
- **Password Recovery**: Secure password reset functionality

### 💬 Collaboration
- **Real-time Messaging**: Built-in chat system powered by Ably for team collaboration
- **Research Sharing**: Share research findings and molecular data with team members

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first design using Tailwind CSS and DaisyUI
- **Dark/Light Mode**: Customizable theme support
- **Interactive Components**: Rich UI components for data visualization
- **Dashboard Analytics**: Comprehensive analytics and reporting tools

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React ApexCharts** - Interactive data visualization
- **Lucide React** - Modern icon library

### Backend & Database
- **MongoDB** - NoSQL database with Mongoose ODM
- **NextAuth.js** - Authentication and session management
- **bcrypt** - Password hashing and security

### AI & Molecular Modeling
- **NVIDIA MolMIM API** - AI-powered molecular generation
- **RDKit** - Cheminformatics and molecular analysis
- **Custom ML Pipeline** - Molecular property prediction

### Real-time & Communication
- **Ably** - Real-time messaging and collaboration
- **Resend** - Email service for notifications and verification

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database
- Required API keys (see Environment Variables)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medicore
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables (see [Environment Variables](#environment-variables) section)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Connection
MONGODB_URL=mongodb://username:password@your-mongodb-cluster/database

# Email Service
RESEND_KEY=your_resend_api_key_here

# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Real-time Chat
NEXT_ABLY_API_KEY=your_ably_api_key_here

# AI/ML Services
NVIDIA_API_KEY=your_nvidia_api_key_here
```

### Required Services

1. **MongoDB Atlas**: Set up a MongoDB cluster and get your connection string
2. **Resend**: Sign up for email service API key
3. **Ably**: Get API key for real-time messaging
4. **NVIDIA NGC**: Register for NVIDIA's AI API access

## 📁 Project Structure

```
medicore/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── auth-page/         # Authentication pages
│   │   ├── message/           # Messaging interface
│   │   ├── model/             # Molecular modeling tools
│   │   ├── molecule-bank/     # Molecule database
│   │   ├── research/          # Research dashboard
│   │   └── profile/           # User profile management
│   ├── components/            # Reusable React components
│   │   ├── Dashboard/         # Dashboard components
│   │   ├── Header/            # Navigation components
│   │   ├── Sidebar/           # Sidebar navigation
│   │   └── common/            # Shared UI components
│   ├── lib/                   # Utility libraries
│   │   ├── actions/           # Server actions
│   │   ├── database/          # Database models and connections
│   │   └── utils.ts           # Helper functions
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   └── css/                   # Global styles
├── public/                    # Static assets
└── config files               # Configuration files
```

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Testing
npm run test         # Run test suite (if configured)
```

## 🔐 Authentication

MediCore uses NextAuth.js for secure authentication:

- **Email/Password**: Standard email and password authentication
- **Session Management**: JWT-based sessions with secure token handling
- **Email Verification**: Automated email verification for new accounts
- **Password Reset**: Secure password recovery via email

### Test Credentials
For development/testing:
- **Email**: test@example.com
- **Password**: testpassword123

## 🧬 Molecular Modeling Features

### AI-Powered Generation
- Generate novel molecular structures using NVIDIA's MolMIM API
- Predict molecular properties and drug-likeness scores
- Optimize molecular structures for specific targets

### Visualization Tools
- Interactive 2D/3D molecular structure rendering
- Property analysis and comparison tools
- Export capabilities for research documentation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch


**MediCore** - Advancing drug discovery through AI-powered molecular research.