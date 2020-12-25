import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(cors({ origin:true }));

app.use(express.json());


// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });


const db = admin.firestore();


export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
      msg:'hola',
  });
});

app.get('/goty', async(req, res)=>{
    const gotyRef = db.collection('goty');
    const Snap = await gotyRef.get();
    const juegos = Snap.docs.map((doc)=> doc.data())
    res.json({
        juegos,
    })
});


app.post('/goty', async(req, res)=>{

    const { id } = req.query;

    const gotyRef = db.collection('goty').doc(`${id}`);
    const snap = await gotyRef.get();
    if(!snap.exists)
    {
        res.status(400).json({
            msg: `No existe`,
        });
    }
    else{
        const antes = snap.data() || {votos:0};
        await gotyRef.update({
            votos: antes.votos + 1,
        });

        res.status(200).json({
            msg: `gracias por tu voto`,

        });
    }
});

export const getGoty = functions.https.onRequest( async (request, response) => {
    //const { nombre } = request.query || 'unnamed';
    const gotyRef = db.collection('goty');
    const Snap = await gotyRef.get();
    const juegos = Snap.docs.map((doc)=> doc.data())
    response.json({
        juegos,
    })
    
  });
  
  exports.api = functions.https.onRequest(app);