import { useMemo, useState } from "react";

const words = ["apple", "banana", "cherry", "date", "elderberry", "hi", "sky", "a", "I", ];

const totalLines = 1000;
const allWords = [];
for(let i=0;i<totalLines;i++){
    let sentence = "";
    for(let j=0;j<words.length;j++){
        sentence += words[Math.floor(words.length * Math.random())]
        sentence += " ";
    }
    allWords.push(sentence);
}

export function Assignment1(){
    const [sentences, setSentences] = useState(allWords);
    const [filter, setFilter] = useState("");

    const filterSentences = useMemo(() => {
        return sentences.filter(x => x.includes(filter));
    }, [sentences, filter])

    return <div>
        <input type="text" onChange={(e)=> {
            setFilter(e.target.value)
        }}></input>
        {filterSentences.map(word => <div>{word}</div>)}
    </div>
}