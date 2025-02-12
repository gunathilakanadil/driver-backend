const Driver = require('../models/Driver');
 

class DriverService {
  async getAllDrivers() {
    return await Driver.findAll();
  }

  async getDriverById(id) {
    const driver = await Driver.findByPk(id);
    if (!driver) {
      throw new Error(`Driver not found with ID: ${id}`);
    }
    return driver;
  }

  async addDriver(driverData) {
    return await Driver.create(driverData);
  }

  async updateDriver(id, driverDetails) {
    const driver = await Driver.findByPk(id);
    if (!driver) {
      throw new Error(`Driver not found with id ${id}`);
    }

    await driver.update({
      name: driverDetails.name,
      licenseNumber: driverDetails.licenseNumber,
      phoneNumber: driverDetails.phoneNumber,
      liveLocation: driverDetails.liveLocation
    });

    return driver;
  }

  async deleteDriver(id) {
    const driver = await Driver.findByPk(id);
    if (!driver) {
      throw new Error(`Driver not found with id ${id}`);
    }
    await driver.destroy();
  }

   
}

module.exports = new DriverService();