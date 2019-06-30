//db.operations.insert({'name':'create', 'code':NumberInt('1')});
db.operations.insert({'name':'read', 'code':NumberInt('2')});
db.operations.insert({'name':'update', 'code':NumberInt('4')});
db.operations.insert({'name':'delete', 'code':NumberInt('8')});
db.operations.insert({'name':'hard_delete', 'code':NumberInt('16')});

db.operations.insertMany([{'name':'delete', 'code':NumberInt('8')}, {'name':'hard_delete', 'code':NumberInt('16')}]);

/* Update */
db.operations.update({'code':1}, {'name': 'create', 'code': NumberInt('1')});

// Entirety
var model = db.operations.findOne({'name':'hard_delete'});
model.code = NumberInt('32');
db.operations.update({'name':'hard_delete'}, model);

// Partial $inc => increase (add value to current value)
db.operations.update({'name':'hard_delete'}, {$inc:{'code':NumberInt('64')}});
// Partial $set
db.operations.update({'name':'hard_delete'}, {$set:{'code':NumberInt('16')}});

// Upsert
db.operations.update({'name':'soft_delete'}, {$set:{'code':NumberInt('32')}}, true);

// Update multiple records
// set the fourth parameter to true

/* Find */
//db.operations.find();
// >
db.operations.find({'code':{$gt:4}});
// >=
db.operations.find({'code':{$gte:4}});
// != 
db.operations.find({'code':{$ne:4}});
// <
db.operations.find({'code':{$lt:4}});
// <=
db.operations.find({'code':{$lte:4}});
// &&
db.operations.find({'name':'create','code':1});
// || 
db.operations.find({$or:[{'code':1},{'code':2}]});
// in
db.operations.find({'code':{$in:[1,2,4]}});
// not in
db.operations.find({'code':{$nin:[1,2,4]}});
// regexp
db.operations.find({'name':/^c/});
// where
db.operations.find({$where:function () {return this.name == 'read';}});


/* Remove */
db.operations.remove({'code':{$ne:1}});

/* 
 * Senior Operation
 */
// Aggregation: count，distinct，group，mapReduce
// count
db.operations.count();
db.operations.count({'code':8});

// distinct
db.operations.update({'name':'soft_delete'}, {$set:{'code':NumberInt('16')}});
db.operations.distinct('code');

// group
db.operations.group({
    'key':{'code':true},
    'initial':{'operations':[]},
    '$reduce':function (cur, prev) {
            prev.operations.push(cur.name);
        }
    });

db.operations.group({
    'key':{'code':true},
    'initial':{'operations':[]},
    '$reduce':function (cur, prev) {
            prev.operations.push(cur.name);
        },
    'finalize':function (out) {
            out.count = out.operations.count;
        },
    'condition':{'code'}   
    });    
    
// mapReduce
db.operations.insert({'name':'soft_delete', 'code':NumberInt('16')});
db.operations.find();

function map() {
    emit(this.name, {count:1});
}

function reduce(key, value) {
    var result = {count:0};
    for(var i = 0; i < value.length; i++){
        result.count += value[i].count;
    }
    return result;
}

db.operations.mapReduce(map, reduce, {'out':'collection'});
db.collection.find();

// Cursor
var list = db.operations.find();
list.forEach(function (x) {
    print(x.name);
});
list;

var single=db.operations.find().sort({'name':1}).skip(2).limit(2);
db.operations.find().sort({'name':1}).skip(2).limit(2);
db.operations.find().sort({'name':1});

/*
 * Index
 */
// add test data
for(var i = 0; i < 10000; i++){
    //var rand = parseInt(i * Math.random());
    db.person.insert({'name':'alex' + i, 'age':i});
}
db.person.count();
db.person.find();
db.person.remove({});

db.person.find({'name':'alex' + 100});
db.person.find({'name':'alex' + 100}).explain(true);
db.person.find({'name':'alex' + 100}).explain("executionStats");
db.person.find({'name':'alex' + 100}).explain("allPlansExecution");

// ensure index
db.person.ensureIndex({'name':1});
db.person.find({'name':'alex' + 100}).explain(true);

// unique index
db.person.dropIndex('name_1');
db.person.ensureIndex({"name":1},{"unique":true});

// composite index
db.person.ensureIndex({'name':1, 'age':1});
db.person.ensureIndex({'age':1, 'name':1});
db.person.getIndexes();

db.person.find({'name':'alex' + 100, 'age':100});
