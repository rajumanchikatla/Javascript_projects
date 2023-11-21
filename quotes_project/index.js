let quotes = [
    "Life's beauty lies in the unexpected.",
    "Fortune favors the bold, but wisdom guides them.",
    "In chaos, find your rhythm.",
    "Every stumble is a step toward understanding.",
    "Embrace uncertainty; it births innovation.",
    "Your journey shapes your destination.",
    "In solitude, echoes the truest self.",
    "Dreams paint the canvas of reality.",
    "Wisdom whispers in moments of silence.",
    "The heart knows paths the mind cannot fathom.",
    "Storms reveal our strengths.",
    "Kindness plants seeds that bloom eternally.",
    "Forgiveness frees the caged soul.",
    "Stars shine brightest in the darkest skies.",
    "Courage turns obstacles into stepping stones.",
    "Imagination fuels the engine of progress.",
    "Growth thrives beyond comfort zones.",
    "Miracles often wear ordinary faces.",
    "Love's language transcends all barriers.",
    "Mistakes are the portals of discovery.",
    "Gratitude nourishes the spirit.",
    "Hope is the melody of the resilient heart.",
    "Unity weaves the fabric of strength.",
    "Time dances to the rhythm of change.",
    "Laughter is the symphony of joy.",
    "Compassion heals where words fall short.",
    "Adventure awaits beyond familiar horizons.",
    "In the quiet, truth finds its voice.",
    "Every ending is a new beginning.",
    "Rainbows emerge after the fiercest storms.",
    "Silence speaks volumes in understanding.",
    "Challenges sculpt champions.",
    "Echoes of kindness reverberate endlessly.",
    "The present is a gift; unwrap it gently.",
    "The pen of fate writes in unforeseen ink.",
    "Courage is the bridge between fear and hope.",
    "Reflection reveals hidden truths.",
    "Paths intertwine to form life's tapestry.",
    "The mind's limits are self-imposed.",
    "Patience crafts diamonds from pressure.",
    "Serendipity dances with prepared minds.",
    "Whispers of the past echo in our choices.",
    "In the dance of life, lead with passion.",
    "Brevity often holds profound wisdom.",
    "Synchronicity orchestrates life's miracles.",
    "Sow seeds of kindness; harvest fields of joy.",
    "Adversity births resilience.",
    "Listen to silence; it has much to say.",
    "Mirrors reflect more than mere appearances.",
    "Radiate kindness; it's a universal language.",
    "Eyes closed, hearts open to infinite possibilities.",
    "The compass of the soul points towards truth.",
    "Curiosity kindles the flame of knowledge.",
    "Find solace in the embrace of uncertainty.",
    "The river of time carries lessons downstream.",
    "Genuine smiles light up the darkest paths.",
    "Unlock doors with the key of perseverance.",
    "Reflection is the mirror of the soul.",
    "Admire the stars, but reach for them too.",
    "Humility is the cornerstone of greatness.",
    "Storms cleanse the spirit, clearing the way.",
    "Echoes of laughter resonate in the soul.",
    "Every sunrise brings a new chance for grace.",
    "Bloom where you are planted, grow where you dream.",
    "The mind shapes reality; perception is power.",
    "Forgive not for others, but for your own peace.",
    "Puzzle pieces fit when seen from a distance.",
    "Strive for progress, not perfection.",
    "The journey's value lies in the lessons learned.",
    "Paths crossed leave imprints on the soul.",
    "Listen to whispers; they carry wisdom's secrets.",
    "In the stillness, hear the universe's song.",
    "Resilience molds fragile clay into unyielding stone.",
    "Dance with fear, embrace its transformative power.",
    "Admire the view, but don't fear the climb.",
    "Whispers of doubt fade in the roar of courage.",
    "Embrace the symphony of diverse perspectives.",
    "Lost keys unlock unexpected doors.",
    "Embrace change; it's nature's only constant.",
    "Gratitude turns scarcity into abundance.",
    "In the garden of life, sow seeds of kindness.",
    "Illuminate the dark with the spark of hope.",
    "Storms sculpt the landscape of our resilience.",
    "Love paints the colors of life's masterpiece.",
    "Seeds of wisdom sprout from the soil of experience.",
    "Bridges built with empathy withstand the test of time.",
    "Stars guide, but the heart charts the course.",
    "Amidst chaos, find sanctuary within yourself.",
    "Every sunset whispers promises of tomorrow.",
    "Patience births wisdom; haste breeds regret.",
    "The symphony of life harmonizes in diversity.",
    "Ripples of kindness create oceans of change.",
    "Courage whispers in the face of fear.",
    "Seeds of potential bloom in the soil of belief.",
    "In every ending, lies the seed of a new beginning.",
    "Breathe in possibility; exhale limitation.",
    "Fragments of the past form the mosaic of self.",
    "Gratitude transforms rocks into stepping stones.",
    "Dreams are the blueprints of tomorrow's reality.",
    "Embrace the whispers of your inner voice.",
    "Moments of silence echo the loudest truths.",
    "Love knows no boundaries, respects all borders.",
    "Navigate the labyrinth of life with curiosity.",
    "Echoes of laughter linger in the heart's corridors.",
    "Resilience blooms in the cracks of adversity.",
    "Time's canvas is painted with moments of choice.",
    "Sow seeds of kindness; reap a garden of joy.",
    "The symphony of life plays on the strings of change.",
    "Embrace the storm; its fury births clarity.",
    "Mistakes carve pathways to self-discovery.",
    "The heartbeat of possibility echoes in every moment.",
    "Waves of change wash away the footprints of fear.",
    "In the silence, discover the rhythm of your soul.",
    "Life's mosaic is colored with diverse experiences."
    // Feel free to add more quotes here!
];


window.onload = () => {
    changeQuote();
}


let quoteEl = document.getElementById('quote-text');

function changeQuote(){
    for(let i=0; i < 100; i++){
       const randomIndex = Math.floor(Math.random() * quotes.length);
       quoteEl.innerText = quotes[randomIndex];
    }
}
