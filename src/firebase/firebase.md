# QueryReference and QuerySnapshot
## Query

Request to firestore to give us something from database.
Firestore returns on of these two **types** of objects:

* References
* Snapshots

Of these two objects, they can be either:

* Document version or

* Collection version

So the possible objects from the Firebase query are:

* Query Document Reference  or

* Query Collection Reference or

* Query Document Snapshot  or

* Query Collection Snapshot (AKA: **Query Snapshot**)

Firebase will **always** return these objects, even if nothing exists in that query

## QueryReference

A QueryReference object is an object that represents the "current" place in the database we are querying.

```js
 firesotre.doc('/users/:userId');
 firesotre.collections('/users');
```

The QueryReference object does not have the actual data of the collection or the document.

It instead has the properties that tell us the details about it, or the method to get the SnapshotObject which gives us the data we are looking for.

### DocumentReference vs CollectionReference

* documentReference:
Used to perform CRUD methods. The documentRef methods are: **.set()**, **.get()**, **.update()**, **.delete()**

* collectionReference: 
Can add documents to collections using the **.add()** method.
``//collectionRef.add({//value:prop})``

We get snapshotObjects from the referenceObject using .get()
* ``documentRef.get()`` returns a documentSnapshot object.
* ``collectionRef.get()`` returns a **querySnapshot** (collectionSnapshot) object .

## DocumentSnapshot
We get documentSnapshot object from our documentReference object.

The documentSnapshot object allows us to check if a document exists at this query using the **.exists** property which returns a boolean.

We can also get the actual properties on the object by calling the **.data()** method, which returns us a **JSON** object of the document.