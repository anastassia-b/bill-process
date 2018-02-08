export const login = user => (
  $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
  })
);

export const signup = user => (
  $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
  })
);

export const logout = () => (
  $.ajax({
      method: 'DELETE',
      url: '/api/session',
  })
);

export const fetchUser = id => (
  $.ajax({
      method: 'GET',
      url: `/api/users/${id}`,
  })
);

export const fetchCustomers = () => (
  $.ajax({
      method: 'GET',
      url: `/api/customers/`,
  })
);

export const fetchCustomer = (id) => (
  $.ajax({
      method: 'GET',
      url: `/api/customers/${id}`,
  })
);

export const fetchUsage = (id) => (
  $.ajax({
      method: 'GET',
      url: `/api/customers/${id}/usages`,
  })
);

export const fetchBills = () => (
  $.ajax({
      method: 'GET',
      url: `/api/bills`,
  })
);

export const fetchBill = (id) => (
  $.ajax({
      method: 'GET',
      url: `/api/bills/${id}`,
  })
);

export const createBill = (bill) => (
  $.ajax({
      method: 'POST',
      url: '/api/bills/',
      data: { bill }
  })
);

export const updateBill = (bill, action) => (
  $.ajax({
      method: 'PATCH',
      url: `/api/bills/${bill.id}/${action}`,
      data: { bill }
  })
);
