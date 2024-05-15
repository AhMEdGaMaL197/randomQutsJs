


var quts = [
    {author: '― Oscar Wilde', 
    quote: '“Be yourself; everyone else is already taken.”'
    },
    {author: '― Albert Einstein', 
    quote: '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”'
    },
    {author: '― Marcus Tullius Cicero', 
    quote: '“A room without books is like a body without a soul.”'
    },
    {author: '― Bernard M. Baruch', 
    quote: '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”'
    },
    {author: '― Mae West', 
    quote: '““You only live once, but if you do it right, once is enough.”'
    },
    {author: '― Mahatma Gandhi', 
    quote: '“Be the change that you wish to see in the world.”'
    },
];

function randomQuts(){
    var random = Math.round(Math.random()*quts.length)
    console.log(random);
    document.getElementById("quts").innerHTML= quts[random].quote
    document.getElementById("athur").innerHTML= quts[random].author
}
