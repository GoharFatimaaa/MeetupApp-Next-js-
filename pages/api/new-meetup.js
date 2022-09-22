import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://goharfatima:qureshii@cluster0.hntrfyt.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;

// import {MongoClient} from 'mongodb'

// async function handler(req,res){
//     if(res.method==='POST'){
//         const data=req.body;

//         const {title, image,address,description}=data

//         const client=await MongoClient.connect('mongodb+srv://goharfatima:qureshii@cluster0.hntrfyt.mongodb.net/?retryWrites=true&w=majority')
//         const db=client.db('MeetUps')

//         const meetupCollections=db.collections('meetups');

//         const result=await meetupCollections.insertOne(data)
//         console.log(result)

//         client.close()

//         res.status(201).json({message:'successfully created'})
//     }

// }
// export default handler