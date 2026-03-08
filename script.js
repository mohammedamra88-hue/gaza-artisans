// بيانات الحرفيين - يمكنك إضافة أو تعديل الأسماء هنا
const artisans = [
    { 
        name: 'أحمد النجار', 
        location: 'غزة - الرمال', 
        job: 'نجارة', 
        image: 'https://picsum.photos/seed/gaza1/400/300', 
        desc: 'متخصص في تصنيع غرف النوم والمطابخ الخشبية بجودة عالية.' 
    },
    { 
        name: 'محمود الكهربائي', 
        location: 'خانيونس - البلد', 
        job: 'كهرباء', 
        image: 'https://picsum.photos/seed/gaza2/400/300', 
        desc: 'صيانة منزلية وتمديدات كهربائية وشبكات طاقة شمسية.' 
    },
    { 
        name: 'سعيد السباك', 
        location: 'رفح - تل السلطان', 
        job: 'سباكة', 
        image: 'https://picsum.photos/seed/gaza3/400/300', 
        desc: 'حل مشاكل الصرف الصحي وتركيب خزانات المياه والأدوات الصحية.' 
    },
    { 
        name: 'ياسر الدهان', 
        location: 'دير البلح - المعسكر', 
        job: 'دهانات', 
        image: 'https://picsum.photos/seed/gaza4/400/300', 
        desc: 'دهانات داخلية وخارجية وديكورات جبس بورد حديثة ومبتكرة.' 
    }
];

// وظيفة عرض الحرفيين في الصفحة
function renderArtisans(data) {
    const grid = document.getElementById('artisansGrid');
    grid.innerHTML = data.map(artisan => `
        <div class="card">
            <img src="${artisan.image}" alt="${artisan.name}">
            <div class="card-content">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0;">${artisan.name}</h3>
                    <span style="font-size:12px; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:5px;">${artisan.job}</span>
                </div>
                <p style="color:#6b7280; font-size:14px; margin:10px 0;">📍 ${artisan.location}</p>
                <p style="color:#4b5563; font-size:14px; line-height:1.6;">${artisan.desc}</p>
                <button class="card-btn" onclick="contactArtisan('${artisan.name}')">تواصل الآن</button>
            </div>
        </div>
    `).join('');
    
    // تفعيل الأيقونات
    if(window.lucide) {
        lucide.createIcons();
    }
}

function contactArtisan(name) {
    alert('جاري تحويلك للاتصال بـ ' + name);
}

// تفعيل البحث
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = artisans.filter(a => 
        a.name.includes(query) || 
        a.location.includes(query) || 
        a.job.includes(query)
    );
    renderArtisans(filtered);
});

// تشغيل العرض عند تحميل الصفحة
window.onload = () => {
    renderArtisans(artisans);
};