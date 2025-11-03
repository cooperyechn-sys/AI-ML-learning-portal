// 切换标签页
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('data-tab');
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// 默认显示“视频”板块
document.getElementById('videos').classList.add('active');

// 实时搜索（过滤所有卡片）
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const keywords = card.dataset.keywords.toLowerCase();
        if (title.includes(keyword) || keywords.includes(keyword)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
