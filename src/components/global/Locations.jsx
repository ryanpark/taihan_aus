const locations = [
  {
    name: "Sydney",
    title: "Australia Branch Office",
    address: "Suite 704, 815 Pacific Highway, Chatswood, NSW2067, Australia",
    tel: "+64-9-379-0066",
    fax: " +64-9-379-2008",
    email: "sw1012@taihan.com | sw1012@taihan.com.au",
    web: "www.taihan.com.au",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.635354193816!2d151.17632161520825!3d-33.79591348067639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a8d3b4038209%3A0xe6baa81defe80936!2s704%2F815+Pacific+Hwy%2C+Chatswood+NSW+2067!5e0!3m2!1sen!2sau!4v1547979957139",
  },
  {
    name: "Auckland",
    title: "New Zealand Branch Office",
    address: "7/325 Ti Rakau Drive, Burswood, Auckland 2013, New Zealand",
    tel: "+64-9-973-5062",
    fax: "",
    email: "c.kim@taihan.co.nz | sales@taihan.co.nz",
    web: "www.taihan.co.nz",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.3984317221184!2d174.89686601529348!3d-36.92864517992231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4b7f853d0871%3A0x272c7c978c0c151f!2s7%2F325+Ti+Rakau+Dr%2C+East+Tamaki%2C+Auckland+2013%2C+New+Zealand!5e0!3m2!1sen!2sau!4v1548068100324",
  },
  {
    name: "Saudi",
    title: "Saudi Branch Office",
    address:
      "Office No.18, 3rd Floor, Complex(7) Commercial Center King Abdul Aziz Road P.O.Box 300201, Riyadh 11372, K.S.A.",
    tel: "+966-11-410-1773",
    fax: "+966-11-419-0262",
    email: "jhshim@taihan.com | hslee0822@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.229221209656!2d46.67452301526292!3d24.753328755638517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a660284fbf%3A0x40095046d1eae3ec!2sKing+Abdul+Aziz+Rd%2C+Riyadh+Saudi+Arabia!5e0!3m2!1sen!2sau!4v1548068431786",
  },
  {
    name: "Saudi Arabia",
    title: "Saudi Taihan Branch Office",
    address: "Al-Kharj Road, Exit 12, P.O Box 31329, Riyadh 11497, KSA",
    tel: "+966-11-214- 2012 ",
    fax: "966-11-214-2237",
    email: "si.kim@sauditaihan.com | si.kim@sauditaihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.603173661548!2d46.734663815261335!3d24.637358360230085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05c367756c9f%3A0x7149b2cca04ebe0d!2s11497+Al+Kharj+Rd%2C+As+Salhiyah%2C+Riyadh+12662%2C+Saudi+Arabia!5e0!3m2!1sen!2sau!4v1548069749079",
  },
  {
    name: "Dubai",
    title: "Dubai Branch Office",
    address:
      "Office No.908, Al Shafar Tower 1, TECOM, P.O.Box 117561, Dubai, UAE",
    tel: "+971-4-368-8988",
    fax: "+971-4-368-6779",
    email: "jshuh@taihan.com | sales@taihan.ae",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1006794075433!2d55.17198491526788!3d25.098453041858086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b70ebc0a1a7%3A0xf9a4566a5c635a60!2sAl+Shafar+Tower+1+-+Dubai+-+United+Arab+Emirates!5e0!3m2!1sen!2sau!4v1548068801855",
  },
  {
    name: "Abu Dubai",
    title: "Abu Dhabi Branch Office",
    address:
      "Office No. 1902, Bin Hamoodah Tower, Khaleej Al Arabi St. PO Box 54562, Abu Dhabi, UAE",
    tel: "+1-562-946-8500",
    fax: "+1-562-946-0200",
    email: "jshuh@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.929103101876!2d54.43844241525853!3d24.41853046884019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e42746e2cd029%3A0x7c774d4fd436bbf1!2sBin+Hamoodah+Tower!5e0!3m2!1sen!2sau!4v1548068955437",
  },
  {
    name: "Singapore",
    title: "Singapore Branch Office",
    address:
      "150 Kampong Ampat #07-04 KA Centre Singapore 368324, Republic of Singapore",
    tel: "+65-6842-5069",
    fax: "+65-6842-5076",
    email: "jsnam@taihan.com | yda23@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.735224875646!2d103.88135501475402!3d1.3350706990262733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178e3b49665b%3A0xaef9d8beae3e3bb!2sHSBC+Institutional+Trust+Services+Ka+Centre!5e0!3m2!1sen!2sau!4v1548069939656",
  },
  {
    name: "Malaysia",
    title: "Malaysia Branch Office",
    address:
      "No. 2-09, Jalan Pandan Prima 1 Dataran Pandan Prima 55100 Kuala Lumpur, Malaysia",
    tel: "+60-3-9285-8017",
    fax: "+60-3-9200-1136",
    email: "jsnam@taihan.com | nor@taihan.com.my",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.818353295385!2d101.73917361512893!3d3.14260605406831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc365023f0c6c3%3A0xb91b4f526e62da62!2sJalan+Pandan+Prima+1%2C+Dataran+Pandan+Prima%2C+55100+Ampang%2C+Selangor%2C+Malaysia!5e0!3m2!1sen!2sau!4v1548070255865",
  },
  {
    name: "Indonesia",
    title: "Indonesia Branch Office",
    address:
      "Graha Surveyor Indonesia, 19th Floor Suite 1903 Jl.Gatot Subroto Kav. 56 Jakarata Selatan 12950, Indonesia",
    tel: "+62 21 2941 0780",
    fax: "+62 21 2941 0775",
    email: " jsnam@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1850073961696!2d106.8302786151726!3d-6.239330362835671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c2f78e1417%3A0x6e69dc9146860164!2sPT+Surveyor+Indonesia+(Persero)!5e0!3m2!1sen!2sau!4v1548070930336",
  },
  {
    name: "Vietnam",
    title: "TCV (Taihan Cable Vina)",
    address:
      "21-23 Nguyen Thi Minh Khai Street Ben Nghe Ward, Distric 1, HCM City",
    tel: " +84-28-3518-0786",
    fax: " +84-28-3518-0785",
    email: "taihan@taihancable.com",
    web: "www.tsc.vn",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.354552028815!2d106.699609!3d10.7841334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f35f938dcb3%3A0xd42293ee91fd2115!2zTOG6p3UgMSwgU29tZXJzZXQgQ2hhbmNlbGxvciBDb3VydCBIbyBDaGkgTWluaCBDaXR5LCAyMyDEkC4gTmd1eeG7hW4gVGjhu4sgTWluaCBLaGFpLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sau!4v1688909527858!5m2!1sen!2sau",
  },
  {
    name: "Russia",
    title: "Russia Branch Office",
    address: "117335, Moscow, Vavilova street, 69/75, office no. 1133, Russia",
    tel: " +7- 495-225-9591",
    fax: "",
    email: "alexlee@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.3810286966327!2d37.54880421597473!3d55.68236300488988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cec3d82329b%3A0xadd82e22ecac805c!2sUlitsa+Vavilova%2C+69%2F75%2C+1133%2C+Moskva%2C+Russia%2C+117335!5e0!3m2!1sen!2sau!4v1548073100969",
  },
  {
    name: "uk",
    title: "UK Branch Office",
    address:
      "9 Teddington Business Park, Station Road, Teddington, Middlesex TW11 9BQ, UK",
    tel: "+44-20-8943-4901",
    fax: "",
    email: "jhhan@taihan.com | taihanuk@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.742111919571!2d-0.3358661842330094!3d51.42616377962194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b7ea57a5af9%3A0xcc68a0ca089997fe!2sThe+Outdoor+Deck+Company!5e0!3m2!1sen!2sau!4v1548073217331",
  },
  {
    name: "SouthAfrica",
    title: "Malesela Taihan Electric Cable Pty., Ltd.",
    address:
      "1 Steel Road, Peacehaven, Vereeniging 1939, Gauteng, South Africa",
    tel: "+27-16-450-8200",
    fax: "+27-16-450-8202",
    email: "info@m-tec.co.za",
    web: "www.m-tec.co.za",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6596770762617!2d27.944751915039525!3d-26.659376783237317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9457a754905a29%3A0xafef9a23b8690f2f!2s1+Steel+Rd%2C+Vereeniging%2C+1939%2C+South+Africa!5e0!3m2!1sen!2sau!4v1548073659533",
  },
  {
    name: "USA",
    title: "Taihan Electric USA, Ltd.",
    address: "12016 Telegraph Rd., Suite 200 Santa Fe Springs, CA 90670 USA",
    tel: "+1-562-946-8500",
    fax: "+1-562-946-0200",
    email: "cwlee@taihanusa.com | cwlee@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.921631950702!2d-118.0789286847878!3d33.94314368063572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d2f82f2acbf1%3A0xd4ef5d20fd60916a!2s12016+Telegraph+Rd+%23200%2C+Santa+Fe+Springs%2C+CA+90670%2C+USA!5e0!3m2!1sen!2sau!4v1548073821838",
  },
  {
    name: "NewJersey",
    title: "New Jersey Branch Office",
    address: "560 Sylvan Ave 3rd Floor Englewood Cliffs, NJ 07632",
    tel: " +1-201-569-2493",
    fax: "",
    email: "dookim@taihanusa.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.425560838549!2d-73.95112098458975!3d40.884478979313535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1434697f4fd%3A0x2c212897a8efb16c!2s560+Sylvan+Ave+3rd+Floor%2C+Englewood+Cliffs%2C+NJ+07632%2C+USA!5e0!3m2!1sen!2sau!4v1548074463727",
  },
  {
    name: "LA",
    title: "USA LA Branch Office",
    address: " 12016 Telegraph Rd., Suite 200 Santa Fe Springs, CA90670, USA",
    tel: "+1-562-946-8500",
    fax: "+1-562-946-0200",
    email: "cwlee@taihanusa.com | cwlee@taihan.com",
    web: "",
    gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.921631950702!2d-118.0789286847878!3d33.94314368063572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d2f82f2acbf1%3A0xd4ef5d20fd60916a!2s12016+Telegraph+Rd+%23200%2C+Santa+Fe+Springs%2C+CA+90670%2C+USA!5e0!3m2!1sen!2sau!4v1548074614118",
  },
];

const getLocation = (location) => {
  if (location) {
    const selectLocation = locations.find((loc) => loc.name === location);
    return selectLocation;
  }
};

export default getLocation;
