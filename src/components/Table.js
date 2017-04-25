import React from 'react';
import PropTypes from 'prop-types';

const Table = ({employeeList}) => {
	return  <table>
				<thead>
					<tr>
						<th>ID</th>
						<th>姓名</th>
						<th>年龄</th>
						<th>部门</th>
					</tr>
				</thead>
				<tbody>
					{employeeList.map(ele => (
						<tr>
							<td>{ele.id}</td>
							<td>{ele.name}</td>
							<td>{ele.age}</td>
							<td>{ele.dept}</td>
						</tr>)
					)}
				</tbody>
			</table>
}

Table.propTypes = {
	employeeList: PropTypes.array.isRequired
}

export default Table;