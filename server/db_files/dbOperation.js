const config                    = require('./dbConfig'),
      sql                       = require('mssql/msnodesqlv8');


const getTrucks = async() => {
    try {
        let pool = await sql.connect(config);
        let truckTypes = pool.request().query(`
            select
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
                    from Offers as o
                        inner join Users on Users.Id = o.UserId
                        inner join UserRole on UserRole.Id = Users.RoleId
                        inner join Locations as l1 on l1.Id = o.StartLocationId
                        inner join Locations as l2 on l2.Id = o.EndLocationId
                        inner join TruckType on TruckType.Id = o.TruckTypeId
        `);
        console.log(truckTypes);
        return truckTypes;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getTrucks
}