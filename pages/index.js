import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head'

  export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
      'mongodb+srv://goharfatima:qureshii@cluster0.hntrfyt.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }

function homepage(props){
  return(
    <Fragment>
    <Head>
      <title> Meetup App</title>
      <meta
      name='description'
      content='huge list of meetup'>
      
      </meta>
    </Head>
   <MeetupList meetups={props.meetups}></MeetupList>  
  </Fragment>
  

  )
  

}

export default homepage