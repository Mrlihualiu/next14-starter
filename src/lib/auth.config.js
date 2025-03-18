export const authConfig = {
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    async session ({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }

      return session
    },
    authorized ({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl.pathname === '/userList';
      // 如果在用户列表页面并且用户不是管理员，则拒绝访问
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      // 确保返回 true 以允许访问其他页面
      return true;
    }
  }
}
