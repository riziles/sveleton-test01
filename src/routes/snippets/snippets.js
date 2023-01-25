
let rightResolve = `
<blockquote>
And what is right resolve? Aspiring to renunciation, to freedom from ill will, to harmlessness: 
This is called right resolve.
</blockquote>
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let rightView = 
'<blockquote>What is right view? Knowledge with regard to stress, ' 
+ 'knowledge with regard to the origination of stress, knowledge with '
+ 'regard to the cessation of stress, knowledge with regard to the way of ' 
+ 'practice leading to the cessation of stress.</blockquote> '
+ '<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">'
+ 'The Great Frames of Reference</a>'

let rightSpeech = `
<blockquote>
And what is right speech? Abstaining from lying, from divisive speech, from abusive speech, & from idle chatter: This is called right speech.
</blockquote>
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let rightAction = `
<blockquote>
And what is right action? Abstaining from taking life, from stealing, & from sexual intercourse. This is called right action.
</blockquote>
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let rightLivelihood = `
<blockquote>
And what is right livelihood? There is the case where a disciple of the noble ones, having abandoned dishonest livelihood, keeps his life going with right livelihood: This is called right livelihood.
</blockquote>
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let rightEffort = `
<blockquote>
A disciple of the noble ones generates desire, endeavors, arouses persistence, upholds & exerts his intent for the sake of skillfull qualities.
</blockquote>
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let rightMindfulness = `
<blockquote>
A monk remains focused on the body, on feelings, on the mind and on mental qualities in and of themselves, ardent, alert, and mindful, 
putting aside greed and distress with reference to the world.
</blockquote>
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let rightMeditation = `
The Four Jhanas
<br />
<br />
<a href="https://cdn.britannica.com/primary_source/gutenberg/PGCC_classics/canon/digha/dn22.html">
The Great Frames of Reference Translated from the Pali by Thanissaro Bhikkhu
</a>
`;

let yamas = `
<blockquote>
The Commandments are these: noninjury, truthfulness, abstaining from stealing, from impurity, 
from covetousness.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`;

let niyamas = `
<blockquote>
The Rules are these: purity, serenity, fervent aspiration, spiritual reading, 
and perfect obedience to the Master.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`;

let asana = `
<blockquote>
Right poise must be firm and without strain. 
Right poise is to be gained by steady and temperate effort, and by setting the heart upon the everlasting.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`

let pranayama = `
<blockquote>
The life-current is either outward, or inward, or balanced; it is regulated according to place, time, number; it is prolonged and subtle.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`


let pratyahara = `
<blockquote>
The fourth degree transcends external and internal objects. Thereby is worn away the veil which covers up the light.
Thence comes the mind’s power to hold itself in the light.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`


let dharana = `
<blockquote>
The binding of the perceiving consciousness to a certain region is attention dharana.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`

let dhyana = `
<blockquote>
A prolonged holding of the perceiving consciousness in that region is dhyana.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`

let samadhi = `
<blockquote>
The perceiving consciousness is wholly given to illuminating essential meaning
and is freed from the sense of separateness and personality.
</blockquote>
<br />
<a href="https://www.gutenberg.org/cache/epub/2526/pg2526-images.html">
The Yoga Sutras of Patanjali translated by Charles Johnston
</a>
`





;

export const wordDict = [
    {id:'node3',title: 'Right View', text: rightView},
    {id:'node4',title: 'Right Living', text:yamas},
    {id:'node5',title: 'Right Resolve', text:rightResolve},
    {id:'node6',title: 'Right Effort', text:niyamas},
    {id:'node7',title: 'Right Speech', text:rightSpeech},
    {id:'node8',title: 'Right Posture', text:asana},
    {id:'node9',title: 'Right Action', text:rightAction},
    {id:'node10',title: 'Right Breath', text:pranayama},
    {id:'node11',title: 'Right Livelihood', text:rightLivelihood},
    {id:'node12',title: 'Right Withdrawal', text:pratyahara},
    {id:'node13',title: 'Right Effort', text:rightEffort},
    {id:'node14',title: 'Right Attention', text:dharana},
    {id:'node15',title: 'Right Mindfulness', text:rightMindfulness},
    {id:'node16',title: 'Right Zen', text:dhyana},
    {id:'node17',title: 'Right Meditation', text:rightMeditation},
    {id:'node18',title: 'Right Meditation', text:samadhi}

]