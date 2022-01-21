INSERT INTO Requests
SELECT [Id] = newid()
      ,[UserId] = 'A030DE50-4846-4B80-A218-02555F63FAEF'
      ,[GoodsId] = '6E17AABF-CD28-444A-B191-9B9CA3C3028B'
      ,[EndLocationId] = 'AD1AC05C-FD3D-4A38-8711-A67D10069EF6'
      ,[StartLocationId] = 'F61CDCE3-BF36-498B-B21B-463A1E5C73C8'
      ,[StartDate] = '2022-02-10 00:00:00.000'
      ,[StartDateMax] = '2022-02-11 00:00:00.000'
      ,[EndDate] = '2022-02-13 00:00:00.000'
      ,[EndDateMax] = '2022-02-14 00:00:00.000'
      ,[Volume] = 100
      ,[Weight] = 10
      ,[Budget] = 10000
      ,[PhoneNumber] = '0734678910'
      ,[Email] = 'sam@sam.com'
      ,[Notes] = 'Do not scratch the cars'

GO

INSERT INTO Requests
SELECT [Id] = newid()
      ,[UserId] = 'CDA91C1D-80C2-4487-AC7F-17C61B0659C4'
      ,[GoodsId] = '1C578253-05DF-4436-BCBB-786ED9F70DA0'
      ,[EndLocationId] = '60150D96-ED78-444D-B77A-40CC5BE7369D'
      ,[StartLocationId] = 'AD1AC05C-FD3D-4A38-8711-A67D10069EF6'
      ,[StartDate] = '2022-02-14 00:00:00.000'
      ,[StartDateMax] = '2022-02-15 00:00:00.000'
      ,[EndDate] = '2022-02-16 00:00:00.000'
      ,[EndDateMax] = '2022-02-17 00:00:00.000'
      ,[Volume] = 100
      ,[Weight] = 15
      ,[Budget] = 10000
      ,[PhoneNumber] = '0756783490'
      ,[Email] = 'stephen@st.com'
      ,[Notes] = null

GO

INSERT INTO Requests
SELECT [Id] = newid()
      ,[UserId] = '8ED55188-D005-4300-A0F9-5BE1B8A39715'
      ,[GoodsId] = 'B6909C49-FA05-42FD-B317-46390A138C23'
      ,[EndLocationId] = '60150D96-ED78-444D-B77A-40CC5BE7369D'
      ,[StartLocationId] = 'A4F94AA5-DDA9-4BF6-B693-41EA12393319'
      ,[StartDate] = '2022-02-10 00:00:00.000'
      ,[StartDateMax] = '2022-02-11 00:00:00.000'
      ,[EndDate] = '2022-02-12 00:00:00.000'
      ,[EndDateMax] = '2022-02-13 00:00:00.000'
      ,[Volume] = 100
      ,[Weight] = 10
      ,[Budget] = 10000
      ,[PhoneNumber] = '0789452817'
      ,[Email] = 'sandy@san.com'
      ,[Notes] = null
