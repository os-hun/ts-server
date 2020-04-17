export const Migration = (mysqlCon: any, sql: string) => {
  mysqlCon.query(sql, function (err: any) {
    if (err) throw err;
    console.log('table created!');
  });
};
