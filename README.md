# Portfolio Website

Một trang web portfolio hiện đại được xây dựng với Next.js, TypeScript và Tailwind CSS.

## 🚀 Tính năng

- **Responsive Design**: Tối ưu cho mọi kích thước màn hình
- **Modern UI/UX**: Giao diện hiện đại với gradient và animation
- **Smooth Scrolling**: Điều hướng mượt mà giữa các section
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Interactive Components**:
  - Typewriter effect cho hero section
  - Animated counters cho thống kê
  - Mobile menu responsive
  - Loading animation

## 📂 Cấu trúc dự án

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── AnimatedCounter.tsx
    ├── MobileMenu.tsx
    ├── PageLoader.tsx
    └── TypewriterEffect.tsx
```

## 🛠️ Công nghệ sử dụng

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React Hooks**: State management

## 🎨 Sections bao gồm

1. **Hero Section**: Giới thiệu bản thân với typewriter effect
2. **Stats Section**: Hiển thị thống kê với animated counters
3. **About Section**: Thông tin chi tiết về bản thân
4. **Skills Section**: Kỹ năng với progress bars
5. **Projects Section**: Showcase các dự án đã làm
6. **Contact Section**: Form liên hệ và thông tin

## 🎯 Customization

### Thay đổi thông tin cá nhân:

1. **Tên và thông tin cá nhân**: Chỉnh sửa trong file `src/app/page.tsx`
2. **Skills**: Cập nhật array `skills` với tỷ lệ phần trăm
3. **Projects**: Thêm/sửa thông tin dự án trong array `projects`
4. **Stats**: Điều chỉnh số liệu thống kê trong array `stats`

### Thay đổi màu sắc:

Chỉnh sửa trong file `src/app/globals.css` hoặc sử dụng Tailwind classes.

## 🚀 Chạy dự án

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production build
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: Purple (#7c3aed)
- **Secondary**: Pink (#ec4899)
- **Background**: Dark slate (#0f172a)
- **Text**: White/Gray variants

## 📝 License

MIT License - Bạn có thể sử dụng tự do cho dự án cá nhân hoặc thương mại.

## 👨‍💻 Author

**Tran Hoang Phuc**

- GitHub: [@tranhoangphuc3101](https://github.com/tranhoangphuc3101)
- Email: tranhoangphuc3101@gmail.com
