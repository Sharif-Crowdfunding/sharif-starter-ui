import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Reports = () => {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="facebook" style={{marginTop:"150px"}} dir="rtl">
        <Thead>
          <Tr>
            <Th>آدرس گیرنده</Th>
            <Th>نام پروژه</Th>
            <Th>نام توکن</Th>
            <Th>قیمت</Th>
            <Th>وضعیت</Th>
            <Th>تاریخ</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>0xb7e0DBa2a0EB6F9eC0F8a30Bb09afCb0A7baC58F </Td>
            <Td>طراحی پمپ آب هوشمند </Td>
            <Td>PMP</Td>
            <Td>5000000</Td>
            <Td>در حال انجام</Td>
            <Td>15:20:02 ,1402/03/06</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Reports;
