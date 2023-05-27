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
            <Td>39500000</Td>
            <Td>در حال انجام</Td>
            <Td>15:20:02 ,1402/03/06</Td>
          </Tr>
        </Tbody>
        <Tr>
            <Td>0x5716dF5c58a7AD745379856607329ae1348CBE0C </Td>
            <Td>طراحی پمپ آب هوشمند </Td>
            <Td>PMP</Td>
            <Td>58900000</Td>
            <Td>پایان</Td>
            <Td>08:30:42 ,1402/03/01</Td>
          </Tr>
          <Tr>
            <Td>0xFC541fcc3C965CBc34894021806EDEf263065cd0 </Td>
            <Td>طراحی پمپ آب هوشمند </Td>
            <Td>PMP</Td>
            <Td>340000</Td>
            <Td>پایان</Td>
            <Td>17:30:10 ,1402/02/29</Td>
          </Tr>
          <Tr>
            <Td>0x8D7f743E8974D6663cA56d0baa47A7995201C680 </Td>
            <Td>طراحی پمپ آب هوشمند </Td>
            <Td>PMP</Td>
            <Td>10000000</Td>
            <Td>در حال انجام</Td>
            <Td>22:16:47 ,1402/03/17</Td>
          </Tr><Tr>
            <Td>0x215FA1ceDA44C8c5Ce0f15A21FA447C40D7Ef99F </Td>
            <Td>طراحی فیلتر روغن </Td>
            <Td>PMP</Td>
            <Td>1020000</Td>
            <Td>در حال انجام</Td>
            <Td>22:16:47 ,1402/03/17</Td>
          </Tr><Tr>
            <Td>0x791Bf2F979fDE144a2BFDBd74Fba8cFE33BcEdA0 </Td>
            <Td>طراحی فیلتر روغن </Td>
            <Td>PMP</Td>
            <Td>3250000</Td>
            <Td>در حال انجام</Td>
            <Td>22:16:47 ,1402/03/17</Td>
          </Tr>
      </Table>
    </TableContainer>
  );
};

export default Reports;
