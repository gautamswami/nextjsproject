import './globals.css'

export const metadata = {
  title: 'Gautam Swami',
  description: "Welcome to my portfolio website! As a skilled web developer, I specialize in creating high-quality websites and applications using the latest technologies. Browse through my portfolio to see my previous projects and learn more about my skills and experience in front-end and back-end development. Let's work together to bring your web development ideas to life!",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
