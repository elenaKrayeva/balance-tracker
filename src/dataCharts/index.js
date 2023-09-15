export const getChartData = (labelsArr, label, data, bgcArr, bdcArr) => {
  return {
    labels: labelsArr,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: bgcArr,
        borderColor: bdcArr,
      },
    ],
  };
};

export const getChartOptions = () => {
  return {
    responsive: true,
  };
};
