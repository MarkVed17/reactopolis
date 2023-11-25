const updateCampaignDetails = ({
    campaignDetails,
    completedLocationIds,
    newLocations,
  }) => {
    const updatedCampaignDetails = campaignDetails.map((campaign) => {
      const isCampaignCompleted = completedLocationIds.some(
        (locationId) => campaign.id === locationId,
      );
  
      if (isCampaignCompleted) {
        return { ...campaign, completed: true };
      } else return campaign;
    });
  
    if (newLocations.length) {
      return [
        ...updatedCampaignDetails.slice(0, 2),
        ...newLocations,
        ...updatedCampaignDetails.slice(2),
      ];
    }
  };
  
  const completedLocationIds = [1, 3];
  const campaignDetails = [
    {
      id: 1,
      name: "Aizawl",
      state: "Mizoram",
      completed: false,
    },
    {
      id: 2,
      name: "Kochi",
      state: "Haryana",
      completed: false,
    },
    {
      id: 3,
      name: "Nagercoil",
      state: "Tamil Nadu",
      completed: false,
    },
  ];
  const newLocations = [
    {
      id: 4,
      name: "Kurnool",
      state: "Andhra Pradesh",
      completed: false,
    },
    {
      id: 5,
      name: "Warangal",
      state: "Telangana",
      completed: false,
    },
  ];
  
  console.log(
    updateCampaignDetails({
      campaignDetails,
      completedLocationIds,
      newLocations,
    }),
  );
  