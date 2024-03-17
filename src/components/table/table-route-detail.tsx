import { Table, TableCell, TableRow } from '@radix-ui/themes';
import { TableFooter } from '../ui/table';

export function RouteDetailTable({ data }: { data: any }) {
  return (
    <Table.Root variant="surface" size="3" className='mb-36'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Port</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>latitude</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>longitude</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.map((item: any) => (
          <Table.Row>
            <Table.RowHeaderCell>{item?.port.portName}</Table.RowHeaderCell>
            <Table.Cell>{item?.port.country}</Table.Cell>
            <Table.Cell>{item?.port.location}</Table.Cell>
            <Table.Cell>{item?.port.latitude}</Table.Cell>
            <Table.Cell>{item?.port.longitude}</Table.Cell>
            <Table.Cell>{item?.port.type}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Time Estimate</TableCell>
          <TableCell>{data && data[0] && data[0].route && data[0].route.estimatedDuration} days</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={5}>Price Estimate</TableCell>
          <TableCell>${data && data[0] && data[0].route && data[0].route.price}</TableCell>
        </TableRow>
      </TableFooter>
    </Table.Root>
  );
}
