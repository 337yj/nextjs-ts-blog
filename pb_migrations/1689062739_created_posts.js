migrate((db) => {
  const collection = new Collection({
    "id": "2ym4tk65iqp0zm0",
    "created": "2023-07-11 08:05:39.666Z",
    "updated": "2023-07-11 08:05:39.666Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i3bbo26t",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2ym4tk65iqp0zm0");

  return dao.deleteCollection(collection);
})
