import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import moment from "moment";

const CountdownTimer = ({endTime}) => {
  const [countdown, setCountdown] = useState({
    title: "",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function calculateCountdown(endtime){
    const deadline = endtime;
    const now = moment().unix();
    const diff = deadline-now;
    let title = "";
    if (diff > 0) {
      title = "زمان باقی‌مانده تا پایان مزایده";
      const duration = moment.duration(diff*1000);

      setCountdown({
        title: title,
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    } else {
      title = "زمان به پایان رسیده است";

      setCountdown({
        title: title,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateCountdown(endTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <Box textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">{countdown.title}</Text>
      <Text fontSize="lg" mt={4}>
        {countdown.days} روز {countdown.hours} ساعت {countdown.minutes} دقیقه{" "}
        {countdown.seconds} ثانیه   
      </Text>
    </Box>
  );
};

export default CountdownTimer;
