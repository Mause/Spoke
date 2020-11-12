export function shouldShowCampaignBudgetColumn(campaigns) {
  const campaignsWithBudget = campaigns.filter(campaign => !!campaign.budget);
  return !!campaignsWithBudget.length;
}

export function campaignCostCalculator(
  sentTotal,
  replyTotal,
  outgoingMessageCost,
  incomingMessageCost
) {
  const sentTotalCost = outgoingMessageCost * sentTotal;
  const replyTotalCost = incomingMessageCost * replyTotal;

  const totalCost = sentTotalCost + replyTotalCost;
  return totalCost.toFixed(2);
}

export function getBudgetUsedPercentage(
  sentMessageTotal,
  replyMessageTotal,
  outgoingMessageCost,
  incomingMessageCost,
  campaignBudget
) {
  const totalCampaignCost = campaignCostCalculator(
    sentMessageTotal,
    replyMessageTotal,
    outgoingMessageCost,
    incomingMessageCost
  );

  const budgetUsedPercentage = (totalCampaignCost / campaignBudget) * 100;
  return budgetUsedPercentage.toFixed(0);
}
