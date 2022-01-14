USE [Project_ISI]

CREATE TABLE [dbo].[UserRole]
(
 [Id]   uniqueidentifier NOT NULL ,
 [Role] varchar(50) NOT NULL ,


 CONSTRAINT [PK_5] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

-- 

CREATE TABLE [dbo].[Users]
(
 [Id]       uniqueidentifier NOT NULL ,
 [RoleId]   uniqueidentifier NOT NULL ,
 [Username] varchar(50) NOT NULL ,
 [Password] varchar(50) NOT NULL ,


 CONSTRAINT [PK_11] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_16] FOREIGN KEY ([RoleId])  REFERENCES [dbo].[UserRole]([Id])
);
GO


CREATE NONCLUSTERED INDEX [FK_18] ON [dbo].[Users] 
 (
  [RoleId] ASC
 )

GO

-- 

CREATE TABLE [dbo].[GoodsType]
(
 [Id]    uniqueidentifier NOT NULL ,
 [Goods] varchar(50) NOT NULL ,


 CONSTRAINT [PK_53] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

-- 

CREATE TABLE [dbo].[TruckType]
(
 [Id]    uniqueidentifier NOT NULL ,
 [Brand] varchar(50) NOT NULL ,


 CONSTRAINT [PK_37] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

-- 

CREATE TABLE [dbo].[Locations]
(
 [Id]       uniqueidentifier NOT NULL ,
 [Location] varchar(50) NOT NULL ,


 CONSTRAINT [PK_78] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

-- 

CREATE TABLE [dbo].[Offers]
(
 [Id]              uniqueidentifier NOT NULL ,
 [UserId]          uniqueidentifier NOT NULL ,
 [EndLocationId]   uniqueidentifier NOT NULL ,
 [StartLocationId] uniqueidentifier NOT NULL ,
 [TruckTypeId]     uniqueidentifier NOT NULL ,
 [StartDate]       datetime NOT NULL ,
 [EndDate]         datetime NOT NULL ,
 [Volume]          int NOT NULL ,
 [Dimensions]      varchar(50) NOT NULL ,
 [Weight]          int NOT NULL ,
 [PriceEmpty]      int NOT NULL ,
 [PriceLoaded]     int NOT NULL ,
 [PhoneNumber]     varchar(10) NOT NULL ,
 [Email]           varchar(50) NOT NULL ,
 [Notes]           varchar(150) NULL ,


 CONSTRAINT [PK_23] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_28] FOREIGN KEY ([UserId])  REFERENCES [dbo].[Users]([Id]),
 CONSTRAINT [FK_39] FOREIGN KEY ([TruckTypeId])  REFERENCES [dbo].[TruckType]([Id]),
 CONSTRAINT [FK_80] FOREIGN KEY ([StartLocationId])  REFERENCES [dbo].[Locations]([Id]),
 CONSTRAINT [FK_83] FOREIGN KEY ([EndLocationId])  REFERENCES [dbo].[Locations]([Id])
);
GO


CREATE NONCLUSTERED INDEX [FK_30] ON [dbo].[Offers] 
 (
  [UserId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_41] ON [dbo].[Offers] 
 (
  [TruckTypeId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_82] ON [dbo].[Offers] 
 (
  [StartLocationId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_85] ON [dbo].[Offers] 
 (
  [EndLocationId] ASC
 )

GO

-- 

CREATE TABLE [dbo].[Requests]
(
 [Id]              uniqueidentifier NOT NULL ,
 [UserId]          uniqueidentifier NOT NULL ,
 [GoodsId]         uniqueidentifier NOT NULL ,
 [EndLocationId]   uniqueidentifier NOT NULL ,
 [StartLocationId] uniqueidentifier NOT NULL ,
 [StartDate]       datetime NOT NULL ,
 [StartDateMax]    datetime NOT NULL ,
 [EndDate]         datetime NOT NULL ,
 [EndDateMax]      datetime NOT NULL ,
 [Volume]          int NOT NULL ,
 [Weight]          int NOT NULL ,
 [Budget]          int NOT NULL ,
 [PhoneNumber]     varchar(10) NOT NULL ,
 [Email]           varchar(50) NOT NULL ,
 [Notes]           varchar(150) NULL ,


 CONSTRAINT [PK_88] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_102] FOREIGN KEY ([GoodsId])  REFERENCES [dbo].[GoodsType]([Id]),
 CONSTRAINT [FK_89] FOREIGN KEY ([UserId])  REFERENCES [dbo].[Users]([Id]),
 CONSTRAINT [FK_92] FOREIGN KEY ([StartLocationId])  REFERENCES [dbo].[Locations]([Id]),
 CONSTRAINT [FK_95] FOREIGN KEY ([EndLocationId])  REFERENCES [dbo].[Locations]([Id])
);
GO


CREATE NONCLUSTERED INDEX [FK_104] ON [dbo].[Requests] 
 (
  [GoodsId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_91] ON [dbo].[Requests] 
 (
  [UserId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_94] ON [dbo].[Requests] 
 (
  [StartLocationId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_97] ON [dbo].[Requests] 
 (
  [EndLocationId] ASC
 )

GO

-- 

CREATE TABLE [dbo].[Contracts]
(
 [Id]        uniqueidentifier NOT NULL ,
 [OfferId]   uniqueidentifier NOT NULL ,
 [RequestId] uniqueidentifier NOT NULL ,


 CONSTRAINT [PK_116] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_117] FOREIGN KEY ([OfferId])  REFERENCES [dbo].[Offers]([Id]),
 CONSTRAINT [FK_120] FOREIGN KEY ([RequestId])  REFERENCES [dbo].[Requests]([Id])
);
GO


CREATE NONCLUSTERED INDEX [FK_119] ON [dbo].[Contracts] 
 (
  [OfferId] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_122] ON [dbo].[Contracts] 
 (
  [RequestId] ASC
 )

GO
