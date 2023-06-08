package main

import (
	"encoding/json"
	"fmt"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// PatientContract is a smart contract for managing patient information
type PatientContract struct {
	contractapi.Contract
}

// Patient stores the details of a patient
type Patient struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	Address string `json:"address"`
}

// StorePatient stores a patient's information in CouchDB
func (pc *PatientContract) StorePatient(ctx contractapi.TransactionContextInterface, id string, name string, address string) error {
	existing, err := ctx.GetStub().GetState(id)
	if err != nil {
		return fmt.Errorf("failed to read from world state: %v", err)
	}
	if existing != nil {
		return fmt.Errorf("patient with ID %s already exists", id)
	}

	patient := &Patient{
		ID:      id,
		Name:    name,
		Address: address,
	}

	patientJSON, err := json.Marshal(patient)
	if err != nil {
		return fmt.Errorf("failed to marshal patient data: %v", err)
	}

	err = ctx.GetStub().PutState(id, patientJSON)
	if err != nil {
		return fmt.Errorf("failed to put patient data in world state: %v", err)
	}

	return nil
}

// GetPatient retrieves a patient's information from CouchDB
func (pc *PatientContract) GetPatient(ctx contractapi.TransactionContextInterface, id string) (*Patient, error) {
	patientJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, fmt.Errorf("failed to read from world state: %v", err)
	}
	if patientJSON == nil {
		return nil, fmt.Errorf("patient with ID %s does not exist", id)
	}

	patient := new(Patient)
	err = json.Unmarshal(patientJSON, patient)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal patient data: %v", err)
	}

	return patient, nil
}

func main() {
	chaincode, err := contractapi.NewChaincode(&PatientContract{})
	if err != nil {
		fmt.Printf("Error creating patient contract: %v", err)
		return
	}

	if err := chaincode.Start(); err != nil {
		fmt.Printf("Error starting patient contract: %v", err)
	}
}
