const quotes = [
    { 
        quote : "成功する人は、好きで得意なものを毎日しているから成功しいている。",
        author : "石井貴士",
    },
    {        
        quote : "失敗からは必ず新たな発見がある。",
        author : "田中耕一",
    },
    {       
        quote : "幸福は常に努力する生活の中にのみあるのだ。",
        author : "石川達三",
    },
    {        
        quote : "冬の後には春が来るのだ。",
        author : "有島武郎",
    },
    {        
        quote : "予期せぬことにどれだけ出会えるかが一番面白いところ。",
        author : "羽生善治",
    },
    {        
        quote : "やりたいことがあるなら、一度チャレンジすればいい。",
        author : "家入一真",
    },
    {        
        quote : "過去ばかりあれこれ思い出して、センチになっているわけにはいかない。自分は現在に、未来に生きなければならないのだ。",
        author : "植村直己",
    },
    {        
        quote : "アイデアって奴は、鉛筆描きのスケッチからだって生み出せる。",
        author : "ウォルト ディズニ",
    },
    {        
        quote : "人間は究極のところ、自分満足のために生きているんだ。",
        author : "正義 孫",
    },
    {        
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;