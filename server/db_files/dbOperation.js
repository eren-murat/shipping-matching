const config                    = require('./dbConfig'),
      sql                       = require('mssql/msnodesqlv8');


const getOffers = async() => {
    try {
        let pool = await sql.connect(config);
        let offers = pool.request().query(`
            SELECT
                Id = o.Id,
                Username = Users.Username,
                StartLocation = l1.Location,
                EndLocation = l2.Location,
                StartDate = o.StartDate,
                EndDate = o.EndDate,
                TruckType = TruckType.Brand,
                Volume = o.Volume,
                Dimensions = o.Dimensions,
                Weight = o.Weight,
                PriceEmpty = o.PriceEmpty,
                PriceLoaded = o.PriceLoaded,
                PhoneNumber = o.PhoneNumber,
                Email = o.Email,
                Notes = o.Notes
                    FROM Offers as o
                        LEFT JOIN Users on Users.Id = o.UserId
                        LEFT JOIN UserRole on UserRole.Id = Users.RoleId
                        LEFT JOIN Locations as l1 on l1.Id = o.StartLocationId
                        LEFT JOIN Locations as l2 on l2.Id = o.EndLocationId
                        LEFT JOIN TruckType on TruckType.Id = o.TruckTypeId
        `);
        console.log(offers);
        return offers;
    }
    catch(error) {
        console.log(error);
    }
}

const getRequests = async() => {
    try {
        let pool = await sql.connect(config);
        let requests = pool.request().query(`
            SELECT Id = r.Id
                ,Username = Users.Username
                ,GoodsType = GoodsType.Goods
                ,StartLocation = l1.Location
                ,EndLocation = l2.Location
                ,StartDate = r.StartDate
                ,StartDateMax = r.StartDateMax
                ,EndDate = r.EndDate
                ,EndDateMax = r.EndDateMax
                ,Volume = r.Volume
                ,Weight = r.Weight
                ,Budget = r.Budget
                ,PhoneNumber = r.PhoneNumber
                ,Email = r.Email
                ,Notes = r.Notes
                    FROM Requests as r
                        LEFT JOIN Users on Users.Id = r.UserId
                        LEFT JOIN GoodsType on GoodsType.Id = r.GoodsId
                        LEFT JOIN Locations as l1 on l1.Id = r.StartLocationId
                        LEFT JOIN Locations as l2 on l2.Id = r.EndLocationId
        `);
        console.log(requests);
        return requests;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getOffers: getOffers,
    getRequests: getRequests
}