import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';

function Asset() {
  const [categoryName, setCategoryName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [assetName, setAssetName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAsset = { categoryName, parentCategory, purchaseDate, assetName, code };
    console.log(newAsset);
    
    setCategoryName('');
    setParentCategory('');
    setPurchaseDate('');
    setAssetName('');
    setCode('');
  };

  return (
    <div className="asset-form py-20">
      <h2>Add Asset</h2>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <FormGroup>
              <Label for="categoryName">Category Name</Label>
              <Input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="parentCategory">Parent Category</Label>
              <Input
                type="text"
                id="parentCategory"
                value={parentCategory}
                onChange={(e) => setParentCategory(e.target.value)}
                required
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup>
              <Label for="purchaseDate">Purchase Date</Label>
              <Input
                type="date"
                id="purchaseDate"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                required
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="assetName">Asset Name</Label>
              <Input
                type="text"
                id="assetName"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                required
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup>
              <Label for="code">Code</Label>
              <Input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </FormGroup>
          </div>
        </div>
        <Button type="submit" color="primary">Add Asset</Button>
      </Form>
    </div>
  );
}

export default Asset;
