document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq h3');
    
    // 遍历所有FAQ标题，添加点击事件处理器
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const content = faq.nextElementSibling; // 获取相邻的内容元素
            const symbol = faq.querySelector('.toggle-symbol'); // 获取展开/折叠符号
            
            if (content.style.display === 'block') {
                content.style.display = 'none'; // 如果已展开，则折叠
                symbol.textContent = '+'; // 更改符号为'+'
            } else {
                content.style.display = 'block'; // 如果已折叠，则展开
                symbol.textContent = '−'; // 更改符号为'−'
            }
        });
    });

    // 添加汉堡菜单的切换功能
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);
});

// 汉堡菜单的显示与隐藏功能
function toggleMenu() {
    const nav = document.querySelector('nav ul'); // 选中导航菜单
    if (nav.style.display === 'block') {
        nav.style.display = 'none'; // 如果导航菜单是显示的，就隐藏
    } else {
        nav.style.display = 'block'; // 如果导航菜单是隐藏的，就显示
    }
}
