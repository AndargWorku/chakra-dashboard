



import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import Statics from "./Statics";
import AnalyticalPage from "../pages/Analytics";
import FullAnalyticsPage from "./AnalyticalCard";
import ShopsCategoriesReviewsPage from "./ShopsCategoriesReviewsPage";
import PopularProductsPage from "./PopularProductsPage";
import ReviewPage from "../pages/ReviewPage";

export {};
// Sample data for demonstration purposes
const productData = [
  { category: "Category A", count: 20 },
  { category: "Category B", count: 15 },
  { category: "Category C", count: 10 },
  { category: "Category D", count: 20 },
  { category: "Category E", count: 15 },
  { category: "Category F", count: 10 },
  { category: "Category G", count: 20 },
  { category: "Category H", count: 15 },
  { category: "Category I", count: 10 },
  { category: "Category A", count: 20 },
  { category: "Category B", count: 15 },
  { category: "Category C", count: 10 },
  { category: "Category D", count: 20 },
  { category: "Category E", count: 15 },
  { category: "Category F", count: 10 },
  { category: "Category G", count: 20 },
  { category: "Category H", count: 15 },
  { category: "Category I", count: 10 },
];

const categoryData = [
  { shop: "Shop A", count: 5 },
  { shop: "Shop B", count: 8 },
  { shop: "Shop C", count: 12 },
  { shop: "Shop D", count: 5 },
  { shop: "Shop E", count: 8 },
  { shop: "Shop F", count: 12 },
  { shop: "Shop G", count: 5 },
  { shop: "Shop H", count: 8 },
  { shop: "Shop I", count: 12 },
];

const shopData = [
  { name: "Shop A", value: 30 },
  { name: "Shop B", value: 40 },
  { name: "Shop C", value: 30 },
  { name: "Shop D", value: 30 },
  { name: "Shop E", value: 40 },
  { name: "Shop F", value: 30 },
  { name: "Shop G", value: 30 },
  { name: "Shop H", value: 40 },
  { name: "Shop I", value: 30 },
];

const reviewData = [
  { date: "2024-01-01", rating: 4 },
  { date: "2024-02-01", rating: 3.5 },
  { date: "2024-03-01", rating: 4.2 },
  { date: "2024-04-01", rating: 4 },
  { date: "2024-05-01", rating: 3.5 },
  { date: "2024-06-01", rating: 4.2 },
  { date: "2024-07-01", rating: 4 },
  { date: "2024-08-01", rating: 3.5 },
  { date: "2024-09-01", rating: 4.2 },
];

const Dashboard: React.FC = () => {
  // Helper function to calculate average rating
  const getAverageRating = (data: { rating: number }[]): number => {
    const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / data.length;
  };

  return (
    <Flex
      flexWrap="wrap"
      justify="around"
      align="center"
      direction={["column", "row"]}
    >
      

      
      
      <FullAnalyticsPage/>

      <Stack
      direction="row"
      spacing={4}

      >


       {/* Category Statistics */}
       
        <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="500px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Category Statistics
        </Text>
        <AreaChart width={480} height={300} data={categoryData}>
          <Tooltip />
          <Area type="monotone" dataKey="count" fill="#00800080" />
        </AreaChart>
      </Box> 
      <Box
       flex="1"
      //  boxShadow="xl"
       borderRadius="lg"
       p={6}
       m={4}
       maxW="500px"
       textAlign="center"
      >
      <Statics/>
      </Box>
      </Stack>


      <Stack direction="row" spacing={4}>

      <Box flex="1"
      // boxShadow="xl"
      borderRadius="lg"
      p={6}
      m={4}
      maxW="500px"
      textAlign="center"
      >
   <PopularProductsPage/>
   
      </Box>

   

      {/* <ShopsCategoriesReviewsPage/> */}
      
      {/* Product Statistics */}

       <Box
        flex="1"
        
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="500px"
        textAlign="center"
      >
      
        <Text fontSize="xl" mb={4}>
          Product Statistics
        </Text>
        <BarChart width={450} height={300} data={productData}  >
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#00800080" barSize={13}   />
        </BarChart>
      </Box> 
      </Stack>


      <Stack
      direction="row"
      spacing={4}
      
      >

      {/* Shop Statistics */}
      <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="500px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Shop Statistics
        </Text>
        <PieChart width={470} height={300}>
          <Pie
            data={shopData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="rgba(0, 128, 0, 0.8)" // Transparent dark-green color
            label
            dataKey="value" // Add dataKey here
          >
            {shopData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#00800080" />
            ))}
          </Pie>
        </PieChart>
      </Box>

      {/* Review Statistics */}
      
      <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="500px"
        textAlign="center"
        
      >
        <Text fontSize="xl" mb={4}>
          Review Statistics
        </Text>
        <LineChart width={470} height={300} data={reviewData}>
          <Tooltip />
          <Line type="monotone" dataKey="rating" stroke="rgba(0, 128, 0, 0.8)" />
        </LineChart>
        <Box textAlign="left">
          <Text fontSize="lg">
            Average Rating: {getAverageRating(reviewData)}
          </Text>
          <Text fontSize="lg">Total Reviews: {reviewData.length}</Text>
          <Box>
          {/* <ReviewPage/> */}
          </Box>       
        </Box>                 
      </Box>
      </Stack>
      
    </Flex>
  );
};

export default Dashboard;







// import { Flex, Box, Text, Icon } from "@chakra-ui/react";
// import { FaShoppingCart, FaDollarSign, FaCreditCard, FaUser } from "react-icons/fa";
// import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

// interface IconCardProps {
//   icon: { component: any; color: string };
//   title: string;
//   value: string;
//   trend: number;
//   trendPercentage: string;
//   trendLabel: string;
// }

// const IconCard: React.FC<IconCardProps> = ({ icon, title, value, trend, trendPercentage, trendLabel }) => (
//   <Box width={{ base: "100%", sm: "50%", md: "25%" }} mb={4}>
//     <Flex
//       borderRadius="md"
//       borderWidth="1px"
//       borderColor="gray.200"
//       p={4}
//       alignItems="center"
//       justifyContent="space-between"
//     >
//       <Box bg={icon.color} borderRadius="full" p={2} mr={4}>
//         <Icon as={icon.component} boxSize={6} color="white" />
//       </Box>
//       <Box>
//         <Text fontSize="sm" fontWeight="bold" mb={1}>
//           {title}
//         </Text>
//         <Text fontSize="xl" fontWeight="bold" mb={1}>
//           {value}
//         </Text>
//         <Text fontSize="sm" color={trend >= 0 ? "green.500" : "red.500"}>
//           {trend >= 0 ? <ArrowUpIcon boxSize={3} /> : <ArrowDownIcon boxSize={3} />}
//           {trendPercentage}% {trendLabel}
//         </Text>
//       </Box>
//     </Flex>
//   </Box>
// );

// const Dashboard = () => (
//   <Flex flexWrap="wrap">
//     <IconCard
//       icon={{ component: FaShoppingCart, color: "purple" }}
//       title="New Orders"
//       value="34567"
//       trend={2.00}
//       trendPercentage="+2.00"
//       trendLabel="(30 days)"
//     />
//     <IconCard
//       icon={{ component: FaDollarSign, color: "green" }}
//       title="Total Income"
//       value="$74,567"
//       trend={5.45}
//       trendPercentage="+5.45"
//       trendLabel="Increased"
//     />
//     <IconCard
//       icon={{ component: FaCreditCard, color: "blue" }}
//       title="Total Expense"
//       value="$24,567"
//       trend={-2.00}
//       trendPercentage="-2.00"
//       trendLabel="Expense"
//     />
//     <IconCard
//       icon={{ component: FaUser, color: "orange" }}
//       title="New User"
//       value="34567"
//       trend={-25.00}
//       trendPercentage="-25.00"
//       trendLabel="Earning"
//     />
//   </Flex>
// );

// export default Dashboard;








