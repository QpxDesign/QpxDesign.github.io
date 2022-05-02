poemKey = {
  0: "The Poison Tree",
  1: "The Tyger",
  2: "London",
  3: "My Heart Leaps Up",
  4: "Expostulation and Reply",
  5: "The World is Too Much With Us",
  6: "The Rime of the Ancient Mariner",
  7: "Ozymandias",
  8: "The Cloud",
};

authorKey = {
  0: "Blake",
  1: "Blake",
  2: "Blake",
  3: "Wordsworth",
  4: "Wordsworth",
  5: "Wordsworth",
  6: "Coleridge",
  7: "Shelley",
  8: "Shelley",
};

var activePoem = 0;
var correctAuthor = 0;
var correctTitle = 0;
var rounds = 0; 

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
const poems = {
  0: `I was angry with my friend; 
    I told my wrath, my wrath did end.
    I was angry with my foe: 
    I told it not, my wrath did grow. 
    
    And I waterd it in fears,
    Night & morning with my tears: 
    And I sunned it with smiles,
    And with soft deceitful wiles. 
    
    And it grew both day and night. 
    Till it bore an apple bright. 
    And my foe beheld it shine,
    And he knew that it was mine. 
    
    And into my garden stole, 
    When the night had veild the pole; 
    In the morning glad I see; 
    My foe outstretched beneath the tree.`,
  1: `Tyger Tyger, burning bright, 
    In the forests of the night; 
    What immortal hand or eye, 
    Could frame thy fearful symmetry?
    
    In what distant deeps or skies. 
    Burnt the fire of thine eyes?
    On what wings dare he aspire?
    What the hand, dare seize the fire?
    
    And what shoulder, & what art,
    Could twist the sinews of thy heart?
    And when thy heart began to beat,
    What dread hand? & what dread feet?
    
    What the hammer? what the chain, 
    In what furnace was thy brain?
    What the anvil? what dread grasp, 
    Dare its deadly terrors clasp! 
    
    When the stars threw down their spears 
    And water'd heaven with their tears: 
    Did he smile his work to see?
    Did he who made the Lamb make thee?
    
    Tyger Tyger burning bright, 
    In the forests of the night: 
    What immortal hand or eye,
    Dare frame thy fearful symmetry?`,
  2: `I wander thro' each charter'd street,
    Near where the charter'd Thames does flow. 
    And mark in every face I meet
    Marks of weakness, marks of woe.
    
    In every cry of every Man,
    In every Infants cry of fear,
    In every voice: in every ban,
    The mind-forg'd manacles I hear 
    
    How the Chimney-sweepers cry
    Every blackning Church appalls, 
    And the hapless Soldiers sigh
    Runs in blood down Palace walls 
    
    But most thro' midnight streets I hear
    How the youthful Harlots curse
    Blasts the new-born Infants tear 
    And blights with plagues the Marriage hearse`,
  3: `My heart leaps up when I behold 
    A rainbow in the sky:
 So was it when my life began; 
 So is it now I am a man; 
 So be it when I shall grow old, 
    Or let me die!
 The Child is father of the Man;
 And I could wish my days to be
    Bound each to each by natural piety.`,
  4: `"Why, William, on that old gray stone,
 "Thus for the length of half a day,
 "Why, William, sit you thus alone,
 "And dream your time away?
 
 
 "Where are your books?—that light bequeathed
 "To beings else forlorn and blind!
 "Up! up! and drink the spirit breathed
 "From dead men to their kind.
 
 
 "You look round on your mother earth,
 "As if she for no purpose bore you;
 "As if you were her first-born birth,
 "And none had lived before you!"
 
 
 One morning thus, by Esthwaite lake,
 When life was sweet, I knew not why,
 To me my good friend Matthew spake,
 And thus I made reply:
 
 
 "The eye—it cannot choose but see;
 "We cannot bid the ear be still;
 "Our bodies feel, where'er they be,
 "Against, or with our will.
 
 
 "Nor less I deem that there are Powers
 "Which of themselves our minds impress;
 "That we can feed this mind of ours
 "In a wise passiveness,
 
 
 "Think you, mid all this mighty sum
 "Of things for ever speaking,
 "That nothing of itself will come,
 "But we must still be seeking?
 
 
 "—Then ask not wherefore, here, alone,
 "Conversing as I may,
 "I sit upon this old gray stone,
  "And dream my time away."`,
  5: `The world is too much with us; late and soon,
 Getting and spending, we lay waste our powers:
 Little we see in Nature that is ours;
 We have given our hearts away, a sordid boon!
 This Sea that bares her bosom to the moon;
 The Winds that will be howling at all hours
 And are up-gathered now like sleeping flowers;
 For this, for every thing, we are out of tune;
 It moves us not.—Great God! I'd rather be
 A Pagan suckled in a creed outworn;
 So might I, standing on this pleasant lea,
 Have glimpses that would make me less forlorn;
 Have sight of Proteus coming from the sea;
  Or hear old Triton blow his wreathed horn.`,
  6: `PART I
 It is an ancient Mariner,
 And he stoppeth one of three.
 'By thy long grey beard and glittering eye,
 Now wherefore stopp'st thou me?
 
 The Bridegroom's doors are opened wide,
 And I am next of kin;
 The guests are met, the feast is set:
 May'st hear the merry din.'
 
 He holds him with his skinny hand,
 'There was a ship,' quoth he.
 'Hold off! unhand me, grey-beard loon!'
 Eftsoons his hand dropt he.
 
 He holds him with his glittering eye—
 The Wedding-Guest stood still,
 And listens like a three years' child:
 The Mariner hath his will.
 
 The Wedding-Guest sat on a stone:
 He cannot choose but hear;
 And thus spake on that ancient man,
 The bright-eyed Mariner.
 
 'The ship was cheered, the harbour cleared,
 Merrily did we drop
 Below the kirk, below the hill,
 Below the lighthouse top.
 
 The Sun came up upon the left,
 Out of the sea came he!
 And he shone bright, and on the right
 Went down into the sea.
 
 Higher and higher every day,
 Till over the mast at noon—'
 The Wedding-Guest here beat his breast,
 For he heard the loud bassoon.
 
 The bride hath paced into the hall,
 Red as a rose is she;
 Nodding their heads before her goes
 The merry minstrelsy.
 
 The Wedding-Guest he beat his breast,
 Yet he cannot choose but hear;
 And thus spake on that ancient man,
 The bright-eyed Mariner.
 
 And now the STORM-BLAST came, and he
 Was tyrannous and strong:
 He struck with his o'ertaking wings,
 And chased us south along.
 
 With sloping masts and dipping prow,
 As who pursued with yell and blow
 Still treads the shadow of his foe,
 And forward bends his head,
 The ship drove fast, loud roared the blast,
 And southward aye we fled.
 
 And now there came both mist and snow,
 And it grew wondrous cold:
 And ice, mast-high, came floating by,
 As green as emerald.
 
 And through the drifts the snowy clifts
 Did send a dismal sheen:
 Nor shapes of men nor beasts we ken—
 The ice was all between.
 
 The ice was here, the ice was there,
 The ice was all around:
 It cracked and growled, and roared and howled,
 Like noises in a swound!
 
 At length did cross an Albatross,
 Thorough the fog it came;
 As if it had been a Christian soul,
 We hailed it in God's name.
 
 It ate the food it ne'er had eat,
 And round and round it flew.
 The ice did split with a thunder-fit;
 The helmsman steered us through!
 
 And a good south wind sprung up behind;
 The Albatross did follow,
 And every day, for food or play,
 Came to the mariner's hollo!
 
 In mist or cloud, on mast or shroud,
 It perched for vespers nine;
 Whiles all the night, through fog-smoke white,
 Glimmered the white Moon-shine.'
 
 'God save thee, ancient Mariner!
 From the fiends, that plague thee thus!—
 Why look'st thou so?'—With my cross-bow
 I shot the ALBATROSS.
 
 PART II
 The Sun now rose upon the right:
 Out of the sea came he,
 Still hid in mist, and on the left
 Went down into the sea.
 
 And the good south wind still blew behind,
 But no sweet bird did follow,
 Nor any day for food or play
 Came to the mariner's hollo!
 
 And I had done a hellish thing,
 And it would work 'em woe:
 For all averred, I had killed the bird
 That made the breeze to blow.
 Ah wretch! said they, the bird to slay,
 That made the breeze to blow!
 
 Nor dim nor red, like God's own head,
 The glorious Sun uprist:
 Then all averred, I had killed the bird
 That brought the fog and mist.
 'Twas right, said they, such birds to slay,
 That bring the fog and mist.
 
 The fair breeze blew, the white foam flew,
 The furrow followed free;
 We were the first that ever burst
 Into that silent sea.
 
 Down dropt the breeze, the sails dropt down,
 'Twas sad as sad could be;
 And we did speak only to break
 The silence of the sea!
 
 All in a hot and copper sky,
 The bloody Sun, at noon,
 Right up above the mast did stand,
 No bigger than the Moon.
 
 Day after day, day after day,
 We stuck, nor breath nor motion;
 As idle as a painted ship
 Upon a painted ocean.
 
 Water, water, every where,
 And all the boards did shrink;
 Water, water, every where,
 Nor any drop to drink.
 
 The very deep did rot: O Christ!
 That ever this should be!
 Yea, slimy things did crawl with legs
 Upon the slimy sea.
 
 About, about, in reel and rout
 The death-fires danced at night;
 The water, like a witch's oils,
 Burnt green, and blue and white.
 
 And some in dreams assurèd were
 Of the Spirit that plagued us so;
 Nine fathom deep he had followed us
 From the land of mist and snow.
 
 And every tongue, through utter drought,
 Was withered at the root;
 We could not speak, no more than if
 We had been choked with soot.
 
 Ah! well a-day! what evil looks
 Had I from old and young!
 Instead of the cross, the Albatross
 About my neck was hung.
 
 PART III
 There passed a weary time. Each throat
 Was parched, and glazed each eye.
 A weary time! a weary time!
 How glazed each weary eye,
 
 When looking westward, I beheld
 A something in the sky.
 
 At first it seemed a little speck,
 And then it seemed a mist;
 It moved and moved, and took at last
 A certain shape, I wist.
 
 A speck, a mist, a shape, I wist!
 And still it neared and neared:
 As if it dodged a water-sprite,
 It plunged and tacked and veered.
 
 With throats unslaked, with black lips baked,
 We could nor laugh nor wail;
 Through utter drought all dumb we stood!
 I bit my arm, I sucked the blood,
 And cried, A sail! a sail!
 
 With throats unslaked, with black lips baked,
 Agape they heard me call:
 Gramercy! they for joy did grin,
 And all at once their breath drew in.
 As they were drinking all.
 
 See! see! (I cried) she tacks no more!
 Hither to work us weal;
 Without a breeze, without a tide,
 She steadies with upright keel!
 
 The western wave was all a-flame.
 The day was well nigh done!
 Almost upon the western wave
 Rested the broad bright Sun;
 When that strange shape drove suddenly
 Betwixt us and the Sun.
 
 And straight the Sun was flecked with bars,
 (Heaven's Mother send us grace!)
 As if through a dungeon-grate he peered
 With broad and burning face.
 
 Alas! (thought I, and my heart beat loud)
 How fast she nears and nears!
 Are those her sails that glance in the Sun,
 Like restless gossameres?
 
 Are those her ribs through which the Sun
 Did peer, as through a grate?
 And is that Woman all her crew?
 Is that a DEATH? and are there two?
 Is DEATH that woman's mate?
 
 Her lips were red, her looks were free,
 Her locks were yellow as gold:
 Her skin was as white as leprosy,
 The Night-mare LIFE-IN-DEATH was she,
 Who thicks man's blood with cold.
 
 The naked hulk alongside came,
 And the twain were casting dice;
 'The game is done! I've won! I've won!'
 Quoth she, and whistles thrice.
 
 The Sun's rim dips; the stars rush out;
 At one stride comes the dark;
 With far-heard whisper, o'er the sea,
 Off shot the spectre-bark.
 
 We listened and looked sideways up!
 Fear at my heart, as at a cup,
 My life-blood seemed to sip!
 The stars were dim, and thick the night,
 The steersman's face by his lamp gleamed white;
 From the sails the dew did drip—
 Till clomb above the eastern bar
 The hornèd Moon, with one bright star
 Within the nether tip.
 
 One after one, by the star-dogged Moon,
 Too quick for groan or sigh,
 Each turned his face with a ghastly pang,
 And cursed me with his eye.
 
 Four times fifty living men,
 (And I heard nor sigh nor groan)
 With heavy thump, a lifeless lump,
 They dropped down one by one.
 
 The souls did from their bodies fly,—
 They fled to bliss or woe!
 And every soul, it passed me by,
 Like the whizz of my cross-bow!
 
 PART IV
 'I fear thee, ancient Mariner!
 I fear thy skinny hand!
 And thou art long, and lank, and brown,
 As is the ribbed sea-sand.
 
 I fear thee and thy glittering eye,
 And thy skinny hand, so brown.'—
 Fear not, fear not, thou Wedding-Guest!
 This body dropt not down.
 
 Alone, alone, all, all alone,
 Alone on a wide wide sea!
 And never a saint took pity on
 My soul in agony.
 
 The many men, so beautiful!
 And they all dead did lie:
 And a thousand thousand slimy things
 Lived on; and so did I.
 
 I looked upon the rotting sea,
 And drew my eyes away;
 I looked upon the rotting deck,
 And there the dead men lay.
 
 I looked to heaven, and tried to pray;
 But or ever a prayer had gusht,
 A wicked whisper came, and made
 My heart as dry as dust.
 
 I closed my lids, and kept them close,
 And the balls like pulses beat;
 For the sky and the sea, and the sea and the sky
 Lay dead like a load on my weary eye,
 And the dead were at my feet.
 
 The cold sweat melted from their limbs,
 Nor rot nor reek did they:
 The look with which they looked on me
 Had never passed away.
 
 An orphan's curse would drag to hell
 A spirit from on high;
 But oh! more horrible than that
 Is the curse in a dead man's eye!
 Seven days, seven nights, I saw that curse,
 And yet I could not die.
 
 The moving Moon went up the sky,
 And no where did abide:
 Softly she was going up,
 And a star or two beside—
 
 Her beams bemocked the sultry main,
 Like April hoar-frost spread;
 But where the ship's huge shadow lay,
 The charmèd water burnt alway
 A still and awful red.
 
 Beyond the shadow of the ship,
 I watched the water-snakes:
 They moved in tracks of shining white,
 And when they reared, the elfish light
 Fell off in hoary flakes.
 
 Within the shadow of the ship
 I watched their rich attire:
 Blue, glossy green, and velvet black,
 They coiled and swam; and every track
 Was a flash of golden fire.
 
 O happy living things! no tongue
 Their beauty might declare:
 A spring of love gushed from my heart,
 And I blessed them unaware:
 Sure my kind saint took pity on me,
 And I blessed them unaware.
 
 The self-same moment I could pray;
 And from my neck so free
 The Albatross fell off, and sank
 Like lead into the sea.
 
 PART V
 Oh sleep! it is a gentle thing,
 Beloved from pole to pole!
 To Mary Queen the praise be given!
 She sent the gentle sleep from Heaven,
 That slid into my soul.
 
 The silly buckets on the deck,
 That had so long remained,
 I dreamt that they were filled with dew;
 And when I awoke, it rained.
 
 My lips were wet, my throat was cold,
 My garments all were dank;
 Sure I had drunken in my dreams,
 And still my body drank.
 
 I moved, and could not feel my limbs:
 I was so light—almost
 I thought that I had died in sleep,
 And was a blessed ghost.
 
 And soon I heard a roaring wind:
 It did not come anear;
 But with its sound it shook the sails,
 That were so thin and sere.
 
 The upper air burst into life!
 And a hundred fire-flags sheen,
 To and fro they were hurried about!
 And to and fro, and in and out,
 The wan stars danced between.
 
 And the coming wind did roar more loud,
 And the sails did sigh like sedge,
 And the rain poured down from one black cloud;
 The Moon was at its edge.
 
 The thick black cloud was cleft, and still
 The Moon was at its side:
 Like waters shot from some high crag,
 The lightning fell with never a jag,
 A river steep and wide.
 
 The loud wind never reached the ship,
 Yet now the ship moved on!
 Beneath the lightning and the Moon
 The dead men gave a groan.
 
 They groaned, they stirred, they all uprose,
 Nor spake, nor moved their eyes;
 It had been strange, even in a dream,
 To have seen those dead men rise.
 
 The helmsman steered, the ship moved on;
 Yet never a breeze up-blew;
 The mariners all 'gan work the ropes,
 Where they were wont to do;
 They raised their limbs like lifeless tools—
 We were a ghastly crew.
 
 The body of my brother's son
 Stood by me, knee to knee:
 The body and I pulled at one rope,
 But he said nought to me.
 
 'I fear thee, ancient Mariner!'
 Be calm, thou Wedding-Guest!
 'Twas not those souls that fled in pain,
 Which to their corses came again,
 But a troop of spirits blest:
 
 For when it dawned—they dropped their arms,
 And clustered round the mast;
 Sweet sounds rose slowly through their mouths,
 And from their bodies passed.
 
 Around, around, flew each sweet sound,
 Then darted to the Sun;
 Slowly the sounds came back again,
 Now mixed, now one by one.
 
 Sometimes a-dropping from the sky
 I heard the sky-lark sing;
 Sometimes all little birds that are,
 How they seemed to fill the sea and air
 With their sweet jargoning!
 
 And now 'twas like all instruments,
 Now like a lonely flute;
 And now it is an angel's song,
 That makes the heavens be mute.
 
 It ceased; yet still the sails made on
 A pleasant noise till noon,
 A noise like of a hidden brook
 In the leafy month of June,
 That to the sleeping woods all night
 Singeth a quiet tune.
 
 Till noon we quietly sailed on,
 Yet never a breeze did breathe:
 Slowly and smoothly went the ship,
 Moved onward from beneath.
 
 Under the keel nine fathom deep,
 From the land of mist and snow,
 The spirit slid: and it was he
 That made the ship to go.
 The sails at noon left off their tune,
 And the ship stood still also.
 
 The Sun, right up above the mast,
 Had fixed her to the ocean:
 But in a minute she 'gan stir,
 With a short uneasy motion—
 Backwards and forwards half her length
 With a short uneasy motion.
 
 Then like a pawing horse let go,
 She made a sudden bound:
 It flung the blood into my head,
 And I fell down in a swound.
 
 How long in that same fit I lay,
 I have not to declare;
 But ere my living life returned,
 I heard and in my soul discerned
 Two voices in the air.
 
 'Is it he?' quoth one, 'Is this the man?
 By him who died on cross,
 With his cruel bow he laid full low
 The harmless Albatross.
 
 The spirit who bideth by himself
 In the land of mist and snow,
 He loved the bird that loved the man
 Who shot him with his bow.'
 
 The other was a softer voice,
 As soft as honey-dew:
 Quoth he, 'The man hath penance done,
 And penance more will do.'
 
 PART VI
 
 First Voice
 'But tell me, tell me! speak again,
 Thy soft response renewing—
 What makes that ship drive on so fast?
 What is the ocean doing?'
 
 Second Voice
 Still as a slave before his lord,
 The ocean hath no blast;
 His great bright eye most silently
 Up to the Moon is cast—
 
 If he may know which way to go;
 For she guides him smooth or grim.
 See, brother, see! how graciously
 She looketh down on him.'
 
 First Voice
 'But why drives on that ship so fast,
 Without or wave or wind?'
 
 Second Voice
 'The air is cut away before,
 And closes from behind.
 
 Fly, brother, fly! more high, more high!
 Or we shall be belated:
 For slow and slow that ship will go,
 When the Mariner's trance is abated.'
 
 I woke, and we were sailing on
 As in a gentle weather:
 'Twas night, calm night, the moon was high;
 The dead men stood together.
 
 All stood together on the deck,
 For a charnel-dungeon fitter:
 All fixed on me their stony eyes,
 That in the Moon did glitter.
 
 The pang, the curse, with which they died,
 Had never passed away:
 I could not draw my eyes from theirs,
 Nor turn them up to pray.
 
 And now this spell was snapt: once more
 I viewed the ocean green,
 And looked far forth, yet little saw
 Of what had else been seen—
 
 Like one, that on a lonesome road
 Doth walk in fear and dread,
 And having once turned round walks on,
 And turns no more his head;
 Because he knows, a frightful fiend
 Doth close behind him tread.
 
 But soon there breathed a wind on me,
 Nor sound nor motion made:
 Its path was not upon the sea,
 In ripple or in shade.
 
 It raised my hair, it fanned my cheek
 Like a meadow-gale of spring—
 It mingled strangely with my fears,
 Yet it felt like a welcoming.
 
 Swiftly, swiftly flew the ship,
 Yet she sailed softly too:
 Sweetly, sweetly blew the breeze—
 On me alone it blew.
 
 Oh! dream of joy! is this indeed
 The light-house top I see?
 Is this the hill? is this the kirk?
 Is this mine own countree?
 
 We drifted o'er the harbour-bar,
 And I with sobs did pray—
 O let me be awake, my God!
 Or let me sleep alway.
 
 The harbour-bay was clear as glass,
 So smoothly it was strewn!
 And on the bay the moonlight lay,
 And the shadow of the Moon.
 
 The rock shone bright, the kirk no less,
 That stands above the rock:
 The moonlight steeped in silentness
 The steady weathercock.
 
 And the bay was white with silent light,
 Till rising from the same,
 Full many shapes, that shadows were,
 In crimson colours came.
 
 A little distance from the prow
 Those crimson shadows were:
 I turned my eyes upon the deck—
 Oh, Christ! what saw I there!
 
 Each corse lay flat, lifeless and flat,
 And, by the holy rood!
 A man all light, a seraph-man,
 On every corse there stood.
 
 This seraph-band, each waved his hand:
 It was a heavenly sight!
 They stood as signals to the land,
 Each one a lovely light;
 
 This seraph-band, each waved his hand,
 No voice did they impart—
 No voice; but oh! the silence sank
 Like music on my heart.
 
 But soon I heard the dash of oars,
 I heard the Pilot's cheer;
 My head was turned perforce away
 And I saw a boat appear.
 
 The Pilot and the Pilot's boy,
 I heard them coming fast:
 Dear Lord in Heaven! it was a joy
 The dead men could not blast.
 
 I saw a third—I heard his voice:
 It is the Hermit good!
 He singeth loud his godly hymns
 That he makes in the wood.
 He'll shrieve my soul, he'll wash away
 The Albatross's blood.
 
 PART VII
 This Hermit good lives in that wood
 Which slopes down to the sea.
 How loudly his sweet voice he rears!
 He loves to talk with marineres
 That come from a far countree.
 
 He kneels at morn, and noon, and eve—
 He hath a cushion plump:
 It is the moss that wholly hides
 The rotted old oak-stump.
 
 The skiff-boat neared: I heard them talk,
 'Why, this is strange, I trow!
 Where are those lights so many and fair,
 That signal made but now?'
 
 'Strange, by my faith!' the Hermit said—
 'And they answered not our cheer!
 The planks looked warped! and see those sails,
 How thin they are and sere!
 I never saw aught like to them,
 Unless perchance it were
 
 Brown skeletons of leaves that lag
 My forest-brook along;
 When the ivy-tod is heavy with snow,
 And the owlet whoops to the wolf below,
 That eats the she-wolf's young.'
 
 'Dear Lord! it hath a fiendish look—
 (The Pilot made reply)
 I am a-feared'—'Push on, push on!'
 Said the Hermit cheerily.
 
 The boat came closer to the ship,
 But I nor spake nor stirred;
 The boat came close beneath the ship,
 And straight a sound was heard.
 
 Under the water it rumbled on,
 Still louder and more dread:
 It reached the ship, it split the bay;
 The ship went down like lead.
 
 Stunned by that loud and dreadful sound,
 Which sky and ocean smote,
 Like one that hath been seven days drowned
 My body lay afloat;
 But swift as dreams, myself I found
 Within the Pilot's boat.
 
 Upon the whirl, where sank the ship,
 The boat spun round and round;
 And all was still, save that the hill
 Was telling of the sound.
 
 I moved my lips—the Pilot shrieked
 And fell down in a fit;
 The holy Hermit raised his eyes,
 And prayed where he did sit.
 
 I took the oars: the Pilot's boy,
 Who now doth crazy go,
 Laughed loud and long, and all the while
 His eyes went to and fro.
 'Ha! ha!' quoth he, 'full plain I see,
 The Devil knows how to row.'
 
 And now, all in my own countree,
 I stood on the firm land!
 The Hermit stepped forth from the boat,
 And scarcely he could stand.
 
 'O shrieve me, shrieve me, holy man!'
 The Hermit crossed his brow.
 'Say quick,' quoth he, 'I bid thee say—
 What manner of man art thou?'
 
 Forthwith this frame of mine was wrenched
 With a woful agony,
 Which forced me to begin my tale;
 And then it left me free.
 
 
 Since then, at an uncertain hour,
 That agony returns:
 And till my ghastly tale is told,
 This heart within me burns.
 
 I pass, like night, from land to land;
 I have strange power of speech;
 That moment that his face I see,
 I know the man that must hear me:
 To him my tale I teach.
 
 What loud uproar bursts from that door!
 The wedding-guests are there:
 But in the garden-bower the bride
 And bride-maids singing are:
 And hark the little vesper bell,
 Which biddeth me to prayer!
 
 O Wedding-Guest! this soul hath been
 Alone on a wide wide sea:
 So lonely 'twas, that God himself
 Scarce seemèd there to be.
 
 O sweeter than the marriage-feast,
 'Tis sweeter far to me,
 To walk together to the kirk
 With a goodly company!—
 
 To walk together to the kirk,
 And all together pray,
 While each to his great Father bends,
 Old men, and babes, and loving friends
 And youths and maidens gay!
 
 Farewell, farewell! but this I tell
 To thee, thou Wedding-Guest!
 He prayeth well, who loveth well
 Both man and bird and beast.
 
 He prayeth best, who loveth best
 All things both great and small;
 For the dear God who loveth us,
 He made and loveth all.
 
 The Mariner, whose eye is bright,
 Whose beard with age is hoar,
 Is gone: and now the Wedding-Guest
 Turned from the bridegroom's door.
 
 He went like one that hath been stunned,
 And is of sense forlorn:
  A sadder and a wiser man, He rose the morrow morn.`,
  7: `I met a traveller from an antique land,
  Who said—“Two vast and trunkless legs of stone
  Stand in the desert. . . . Near them, on the sand,
  Half sunk a shattered visage lies, whose frown,
  And wrinkled lip, and sneer of cold command,
  Tell that its sculptor well those passions read
  Which yet survive, stamped on these lifeless things,
  The hand that mocked them, and the heart that fed;
  And on the pedestal, these words appear:
  My name is Ozymandias, King of Kings;
  Look on my Works, ye Mighty, and despair!
  Nothing beside remains. Round the decay
  Of that colossal Wreck, boundless and bare
  The lone and level sands stretch far away.”`,
  8: `I bring fresh showers for the thirsting flowers,
  From the seas and the streams;
  I bear light shade for the leaves when laid
  In their noonday dreams.
  From my wings are shaken the dews that waken
  The sweet buds every one,
  When rocked to rest on their mother's breast,
  As she dances about the sun.
  I wield the flail of the lashing hail,
  And whiten the green plains under,
  And then again I dissolve it in rain,
  And laugh as I pass in thunder.
  
  I sift the snow on the mountains below,
  And their great pines groan aghast;
  And all the night 'tis my pillow white,
  While I sleep in the arms of the blast.
  Sublime on the towers of my skiey bowers,
  Lightning my pilot sits;
  In a cavern under is fettered the thunder,
  It struggles and howls at fits;
  Over earth and ocean, with gentle motion,
  This pilot is guiding me,
  Lured by the love of the genii that move
  In the depths of the purple sea;
  Over the rills, and the crags, and the hills,
  Over the lakes and the plains,
  Wherever he dream, under mountain or stream,
  The Spirit he loves remains;
  And I all the while bask in Heaven's blue smile,
  Whilst he is dissolving in rains.
  
  The sanguine Sunrise, with his meteor eyes,
  And his burning plumes outspread,
  Leaps on the back of my sailing rack,
  When the morning star shines dead;
  As on the jag of a mountain crag,
  Which an earthquake rocks and swings,
  An eagle alit one moment may sit
  In the light of its golden wings.
  And when Sunset may breathe, from the lit sea beneath,
  Its ardours of rest and of love,
  And the crimson pall of eve may fall
  From the depth of Heaven above,
  With wings folded I rest, on mine aëry nest,
  As still as a brooding dove.
  
  That orbèd maiden with white fire laden,
  Whom mortals call the Moon,
  Glides glimmering o'er my fleece-like floor,
  By the midnight breezes strewn;
  And wherever the beat of her unseen feet,
  Which only the angels hear,
  May have broken the woof of my tent's thin roof,
  The stars peep behind her and peer;
  And I laugh to see them whirl and flee,
  Like a swarm of golden bees,
  When I widen the rent in my wind-built tent,
  Till calm the rivers, lakes, and seas,
  Like strips of the sky fallen through me on high,
  Are each paved with the moon and these.
  
  I bind the Sun's throne with a burning zone,
  And the Moon's with a girdle of pearl;
  The volcanoes are dim, and the stars reel and swim,
  When the whirlwinds my banner unfurl.
  From cape to cape, with a bridge-like shape,
  Over a torrent sea,
  Sunbeam-proof, I hang like a roof,
  The mountains its columns be.
  The triumphal arch through which I march
  With hurricane, fire, and snow,
  When the Powers of the air are chained to my chair,
  Is the million-coloured bow;
  The sphere-fire above its soft colours wove,
  While the moist Earth was laughing below.
  
  I am the daughter of Earth and Water,
  And the nursling of the Sky;
  I pass through the pores of the ocean and shores;
  I change, but I cannot die.
  For after the rain when with never a stain
  The pavilion of Heaven is bare,
  And the winds and sunbeams with their convex gleams
  Build up the blue dome of air,
  I silently laugh at my own cenotaph,
  And out of the caverns of rain,
  Like a child from the womb, like a ghost from the tomb,
  I arise and unbuild it again.`,
};

function createExerpt() {
  rounds++;
  const randomPoem = Math.floor(Math.random() * 9);
  const randomPoemLength = getRandomInt(4, 8);
  const poem = poems[randomPoem].split("\n");
  const randomStart = getRandomInt(0, poem.length - 8);
  var exerpt = ``;
  for (var i = 0; i < randomPoemLength; i++) {
    if (poem[randomStart + i].length > 35) {
      exerpt += `<div class="line">${abreviateText(poem[randomStart + i])}</div>`;
    } else {
      exerpt += `<div class="line">${poem[randomStart + i]}</div>`;
    }
  }
  exerpt = exerpt.replace(/ +(?= )/g, "");
  document.getElementById("poem-exerct").innerHTML = exerpt;
  activePoem = randomPoem;
}

function abreviateText(text) {
  const letters = text.split();
  var newText = "";
  for (var i = 0; i < letters.length; i++) {
    if (i > 35) {
      newText += "...";
      return newText;
    }
    newText += letters[i];
  }
  return newText;
}

function checkGuess(){
    var titleGuess = document.getElementById("titleGuess").value
    var authorGuess = document.getElementById("authorGuess").value
    var popupMessage = ""
    if (titleGuess.toLowerCase() === (poemKey[activePoem]).toLowerCase()) {
        correctTitle += 1;
    } else {
        popupMessage += `Incorrect - Title is ${poemKey[activePoem]} \n`
    } if (authorGuess.toLowerCase() === (authorKey[activePoem]).toLowerCase()){
        correctAuthor += 1;
    }
    else {
        popupMessage += `Incorrect - Author is ${authorKey[activePoem]} \n`
    }
    createExerpt();
    if (popupMessage == "") {
        popupMessage += "Correct!"
    }
    alert(popupMessage);
    document.getElementById("titleGuess").value = ''
    document.getElementById("authorGuess").value = ''
}