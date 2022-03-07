// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  env: {
    //DB_LOCAL_URI: "mongodb://localhost:27017/resorts",

    DB_URI:
      "mongodb+srv://mahjong:@Well123@rooms.3btis.mongodb.net/Rooms?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51KYuKkLqKqksVJfuyjhPFQVCsD1Gbl1uE7ZQGwXcHG0xrCcgO0qVKnTjGubQ6ObyQ7aiRS7m7q5yVRcGcjtfIYOq00vJjmXUng",
    STRIPE_SECRET_KEY:
      "sk_test_51KYuKkLqKqksVJfuGlk7BsetNkyobfDZhFKn4MHtbK1p91P0dvlgX7ycR2gxvFg1Q0VRNENzfkKXYwNPOoHI9J2n001KF8dfkD",

    STRIPE_WEBHOOK_SECRET: "whsec_sRy9B2t9em3KQnwapCQTZ532JWQEwpD6",

    CLOUDINARY_CLOUD_NAME: "resorts",
    CLOUDINARY_API_KEY: "872659919688897",
    CLOUDINARY_API_SECRET: "6Vvrw_fzJnD5osAYlpariy83A4g",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "03a735978df11d",
    SMTP_PASSWORD: "d26cf235f12525",
    SMTP_FROM_EMAIL: "noreply@resorts.com",
    SMTP_FROM_NAME: "Resorts Reservation",

    NEXTAUTH_URL: "https://resorts-reservation.vercel.app",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
